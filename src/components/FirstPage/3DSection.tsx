import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.02,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${-y}deg) scale(${s})`;

function ThreeDSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <>
      <section id="Resume" className="min-h-[100vh]">
        <div className="flex gap-10 place-content-end mr-4 sm:mr-10 md:mr-28">
          <div className="mt-6">
            <p className=" max-w-2xl text-start font-medium text-xl tracking-tight leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum efficitur est. Etiam blandit metus eu risus hendrerit
              iaculis. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Mauris ultrices enim ut lacus aliquet, vel auctor leo
              cursus. Quisque tempor felis sodales tellus pulvinar, et faucibus
              dolor tincidunt. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Vivamus leo sem,
              laoreet eu urna ut, vulputate tempor sapien. Pellentesque non
              elementum felis.
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
            style={{ transform: props.xys.to(trans) }}
            className="rounded-md border-[1px] border-gray-200 hover:cursor-pointer w-3/6 max-w-xs min-h-[28rem] shadow-md  "
          >
            <div className="relative place-content-center flex text-3xl ">
              <h1 className=" font-bold m-2">Experiência 3D</h1>
            </div>
          </animated.div>
        </div>
      </section>
    </>
  );
}

export default ThreeDSection;
