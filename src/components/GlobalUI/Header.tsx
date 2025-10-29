// Header.tsx

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiCubeTransparent } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { header_data } from "../../utils/DataGlobalLayout/data";
import { use3dState } from '../../store/3dState';

import { motion, AnimatePresence } from "framer-motion";

// Variants for the sub-menu items (unchanged)
const itemVariants = {
  hidden: { x: 0, y: 20, opacity: 0, scale: 0 },
  visible: (custom : any) => ({
    x: custom.position.x,
    y: custom.position.y,
    opacity: 1,
    scale: 0.6,
    transition: {
      delay: custom.trail / 1000,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

// NEW: Variants for the main button
const mainButtonVariants = {
  hidden: {
    y: 100, // Start 100px below its final position
    opacity: 0,
  },
  visible: {
    y: 0, // Animate to its final position
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2 // Add a small delay so it appears after the camera starts moving
    },
  },
};

function Header() {
  const { activeInteraction, setActiveInteraction } = use3dState();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (activeInteraction === null) {
      setMenuOpen(false);
    }
  }, [activeInteraction]);

  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);
  const handleExitInteraction = () => setActiveInteraction(null);

  return (
    <div className="fixed bottom-4 right-1/2 translate-x-1/2 z-[100] flex flex-col items-center pointer-events-auto">
      <div className="relative w-48 h-48 flex justify-center items-end">
        <AnimatePresence>
          {isMenuOpen &&
            header_data.map((item) => (
              <motion.div
                key={item.id}
                custom={item}
                variants={itemVariants as any}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute"
              >
                {item.path !== null ? (
                  <Link href={item.path} legacyBehavior passHref>
                    <a
                      title={item.name}
                      className={`block rounded-full ${item.color} w-10 h-10 hover:scale-110 transition-transform`}
                    />
                  </Link>
                ) : (
                  <button
                    title={item.name}
                    onClick={handleExitInteraction}
                    className={`flex items-center justify-center rounded-full ${item.color} w-10 h-10 text-white hover:scale-110 transition-transform`}
                  >
                    <VscChromeClose size={22} />
                  </button>
                )}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeInteraction && (
          <motion.button
            className="relative z-10 rounded-full border bg-gray-800/50 text-white backdrop-blur-sm p-2 hover:scale-110 transition-transform"
            onClick={handleToggleMenu}
            variants={mainButtonVariants as any}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <HiCubeTransparent size={35} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;