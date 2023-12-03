import type { NextPage } from "next";
import { GrowingCircleDiv } from "../components/GlobalUI/DivGrowingCircle";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import ToggleColorMode from "../components/GlobalUI/ToggleColorMode";
import Parallax from "../components/ParallaxShowcase";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const Arr = new Array(42)
  const re = [0,0,0,0]
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-dark-mode pt-24">
      {/* <ToggleColorMode />
      <GrowingCircleDiv /> */}
      {/* <div className="absolute left-[371px] bottom-[200px] z-20 h-10 w-10 rounded-full bg-light-mode  mix-blend-exclusion " /> */}
      {/* <div className="z-[5] flex h-full w-full place-content-center items-center">
        <Loader />
        <Parallax src={"/render.png"}/>
      </div> */}
      <div className=" flex h-screen place-content-center items-center">
        <h1 className="font-rubik text-[10vw] font-bold text-white">
          Work in Progress
        </h1>
      </div>
      <div className=" flex w-full place-content-center ">
        <h1 className=" font-wave text-[2vw] md:leading-[4vh] leading-[1vh] text-white ">
          {" "}
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progress Work in Progress
          Work in Progress Work in Progress Work in Progressss
        </h1>
      </div>
    </div>
  );
};

export default Home;
