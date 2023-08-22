import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { calc, trans } from "../../../utils/3d_cards/Translation";

export const InnerSection = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);
  const [card_props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  function Card() {
    if (props.content.type === "Resume") {
      return (
        <>
          <div className="flex gap-10 ml-4 sm:ml-10 md:ml-28">
            {props.content.type === "Resume"}
            <animated.div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseOver={() => setIsHovering(true)}
              onMouseLeave={() => {
                set({ xys: [0, 0, 1] }), setIsHovering(false);
              }}
              style={{ transform: card_props.xys.to(trans) }}
              className="rounded-md border-[1px] border-gray-200 hover:cursor-pointer w-3/6 max-w-xs min-h-[28rem] shadow-md  "
            >
              <div className="relative place-content-center flex text-3xl ">
                <h1 className=" font-bold m-2">{props.name}</h1>
              </div>
            </animated.div>
            <div className="mt-6">
              <p className=" max-w-2xl text-start font-medium text-xl tracking-tight leading-8 text-red-800 ">
                {props.content.text}
              </p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex gap-10 place-content-end mr-4 sm:mr-10 md:mr-28">
            <div className="mt-6">
              <p className=" max-w-2xl text-start font-medium text-xl tracking-tight leading-8">
                {props.content.text}
              </p>
            </div>
            <animated.div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseOver={() => setIsHovering(true)}
              onMouseLeave={() => {
                set({ xys: [0, 0, 1] }), setIsHovering(false);
              }}
              style={{ transform: card_props.xys.to(trans) }}
              className="rounded-md border-[1px] border-gray-200 hover:cursor-pointer w-3/6 max-w-xs min-h-[28rem] shadow-md  "
            >
              <div className="relative place-content-center flex text-3xl ">
                <h1 className=" font-bold m-2">Experiência 3D</h1>
              </div>
            </animated.div>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <Card />
    </>
  );
};
