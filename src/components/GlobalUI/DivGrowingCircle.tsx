"use client";

import { useSpring, animated, easings } from "@react-spring/web";
import { useContext, useRef, useState } from "react";
import { GlobalLayout } from "../../context/UIContext";
import { useThemeStore } from "../../store";
// const vhToPixel = value => `${(window.innerHeight * value) / 100}px`
// const vwToPixel = value => `${(window.innerWidth * value) / 100}px`

export const GrowingCircleDiv = () => {
  const { isClicked, setIsClicked } = useContext(GlobalLayout);
  const { theme } = useThemeStore();
  const [isFinished, setIsFinished] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const props = useSpring({
    scale: theme ? 1 : 0,
    borderRadius: theme ? "0%" : "50%",
    config: {
      duration: 600,
      easing: easings.easeInOutExpo,
    },
    onRest: () => setIsFinished(true),
  });
  return (
    <>
      <div className=" absolute right-10 top-6 z-[0]  flex h-2 w-2 place-content-center items-center justify-center">
        <animated.div
          ref={divRef}
          className={`h-[250vh] w-[250vh] sm:h-[350vw] sm:w-[350vw]`}
          style={{
            ...props,
            backgroundColor: "#0B0B0B",
            position: "fixed",
            display: "flex",
            flex: "0 0 auto",
            zIndex: -1,
          }}
        ></animated.div>
      </div>
    </>
  );
};
