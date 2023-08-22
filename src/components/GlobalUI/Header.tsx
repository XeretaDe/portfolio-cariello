import Link from "next/link";
import { useEffect, useRef, useState, useContext } from "react";
import { HiCubeTransparent } from "react-icons/hi";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { header_data } from "../../utils/DataGlobalLayout/data";


function Header() {
  const [open, setOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isHover, setHover] = useState(false);
  const transApi = useSpringRef();

  const [transition, api] = useTransition(open ? header_data : [], () => ({
    ref: transApi,
    keys: (item) => item.id,
    from: { x: 0, y: -40, opacity: 0, scale: 0 },
    enter: (i) => ({
      x: i.position.x,
      y: i.position.y,
      opacity: 1,
      scale: 1,
      delay: i.trail
    }),
    leave: (i) => ( { x: 0, y: -40, opacity: 0, scale: 0, delay: i.trail }),
  }));

  useChain([transApi], [0, 0.5]);

  function HeaderIcon() {
    return (
      <>
        <HiCubeTransparent size={35} />
      </>
    );
  }

  return (
    <>
    <div className="fixed bottom-0 right-1/2 z-50 w-20 h-20 place-content-center flex flex-col">
      <nav className=" relative flex place-content-center">
        <button
          className="relative rounded-full border p-1 hover:scale-110 transition-all"
          onClick={() => {
            setOpen((open) => !open);
           
          }}
        >
          <HeaderIcon />
        </button>
      </nav>
      <div className="flex w-full place-content-center">
        {transition((style, item) => (
          <Link href={item.path}>
            <animated.div
              key={item.id}
              style={{ ...style }}
              // onClick={() => setOpen(false)}
              className={` z-10 rounded-full ${item.color} mt-2  w-5 m-[0.1rem] p-[0.7rem] hover:cursor-pointer hover:bg-slate-100`}
            />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default Header;
