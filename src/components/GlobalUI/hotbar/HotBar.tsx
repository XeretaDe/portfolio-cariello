"use client";

import Link from "next/link";
import { data } from "../../../utils/hotbar/data";
import { Props } from "../../../utils/hotbar/data";
import { motion, MotionValue } from "framer-motion"; 
import { useRef, useState } from "react";

type Data = {
  data: Props;
};

function Buttons({ data }: Data) {

  return (
    <motion.button

      whileHover={{
        scale: 1.5,
        x: -16,
        marginTop: "12px",
        marginBottom: "12px",
      }}

      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="z-20 flex h-10 w-10 place-items-center justify-center rounded-full bg-gradient-to-r from-[#f4f4f4e3] via-[#ecebeb] to-[#f0ebeb] hover:cursor-pointer dark:from-[#242424] dark:via-[#1c1c1c] dark:to-[#242323]"
    >
      {data.icon}
    </motion.button>
  );
}

export function HotBar({ opacityValue }: { opacityValue?: MotionValue<number> }) {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });


  function HandleMouse(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setMouseCoords({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <motion.nav

      style={{ y: "-50%", opacity: opacityValue }}
      className="fixed right-3 top-1/2 z-10 flex flex-col h-auto w-[57px] gap-4 rounded-full border-gray-200 bg-white/70 p-2 dark:bg-[#161616]/70"
      onMouseMove={(event: any) => {
        HandleMouse(event);

      }}
    >
      {data.map((b, index) => (
        <Link href={b.url}>
        <Buttons key={index} data={b}/>
        </Link>
      ))}
    </motion.nav>
  );
}