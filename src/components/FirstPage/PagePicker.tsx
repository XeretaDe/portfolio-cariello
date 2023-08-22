import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.02,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${-y}deg) scale(${s})`;

export const PagePicker = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [props2, set2] = useSpring(() => ({
    xys2: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <>
      <div className="relative flex flex-row justify-center items-center gap-20 ml-auto mr-auto min-h-[100vh]">
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) =>
            set2({ xys2: calc(x, y) })
          }
          onMouseLeave={() => set2({ xys2: [0, 0, 1] })}
          style={{ transform: props2.xys2.to(trans) }}
          className="bg-transparent rounded-md border-[1px] border-gray-200 hover:cursor-pointer w-3/6 max-w-xs min-h-[28rem] shadow-md  "
        >
          <div className="relative place-content-center flex text-3xl ">
            <h1 className=" font-bold m-2">Experiência 3D</h1>
          </div>
        </animated.div>
      </div>
    </>
  );
};
