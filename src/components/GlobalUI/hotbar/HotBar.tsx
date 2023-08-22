"use client";

import { data } from "../../../utils/hotbar/data";
import { Props } from "../../../utils/hotbar/data";
import { useSpring, animated, easings } from "@react-spring/web";
import { MutableRefObject, RefObject, useRef, useState } from "react";

type Data = {
  data: Props;
};

function Buttons({ data }: Data) {
  const [springs, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    marginLeft: 0,
    marginRight: 0,
    config: {
      easing: easings.linear,
      mass: 20,
      duration: 110,
    },
  }));

  return (
    <>
      <animated.button
        onMouseEnter={() =>
          api.start({ scale: 1.5, y: -16, marginLeft: 12, marginRight: 12 })
        }
        onMouseLeave={() =>
          api.start({ scale: 1, y: 0, marginLeft: 0, marginRight: 0 })
        }
        style={springs}
        className="z-50 flex  h-10 w-10 place-items-center justify-center rounded-full bg-gradient-to-r from-[#f4f4f4e3] via-[#ecebeb] to-[#f0ebeb] hover:cursor-pointer dark:from-[#242424] dark:via-[#1c1c1c] dark:to-[#242323] "
      >
        {data.icon}
      </animated.button>
    </>
  );
}

export function HotBar() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [props, set] = useSpring(() => ({
    transform: "translateX(-50%)",
    config: {
      easing: easings.easeInCirc,
      mass: 50,
      duration: 100,
    },
  }));
  function HandleMouse(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setMouseCoords({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <>
      <animated.nav
        style={props}
        className=" fixed bottom-3 left-1/2 z-10 flex h-[57px] w-auto gap-4 rounded-full border-gray-200 bg-white/70 p-2 pl-4 pr-4 dark:bg-[#161616]/70   "
        onMouseMove={(event) => {
          HandleMouse(event), console.log(mouseCoords);
        }}
      >
        {data.map((b, index) => (
          <Buttons key={index} data={b} />
        ))}
        {/* <hr className=" w-[0.24%] h-full  bg-black" /> */}
      </animated.nav>
    </>
  );
}
