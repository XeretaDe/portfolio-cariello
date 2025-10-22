import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {useLanguageStore} from '../../store';

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}  className="dark:stroke-white stroke-black h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
);


const LanguageDropdown = () => {
    
    const { language, setLanguage } = useLanguageStore();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative z-[100]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-full items-center justify-center rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <GlobeIcon />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 top-full z-10 mt-2 w-44 origin-top-right rounded-lg bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <ul className="py-1 text-sm text-gray-200">
                            <li>
                                <button onClick={() => setLanguage("en-US")} className="block px-4 py-2 hover:bg-gray-600 hover:text-white">English</button>
                            </li>
                            <li>
                                <button onClick={() => setLanguage("pt-BR")} className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Português</button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default LanguageDropdown;