import type { NextPage } from "next";
import { GrowingCircleDiv } from "../components/GlobalUI/DivGrowingCircle";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import ToggleColorMode from "../components/GlobalUI/ToggleColorMode";
import Parallax from "../components/ParallaxShowcase";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex h-screen overflow-hidden bg-dark-mode pt-24 flex-col">
      {/* <ToggleColorMode />
      <GrowingCircleDiv /> */}
      {/* <div className="absolute left-[371px] bottom-[200px] z-20 h-10 w-10 rounded-full bg-light-mode  mix-blend-exclusion " /> */}
      {/* <div className="z-[5] flex h-full w-full place-content-center items-center">
        <Loader />
        <Parallax src={"/render.png"}/>
      </div> */}
      <div className=" flex h-screen place-content-center items-center">
        {/* <h1 className="font-rubik text-[10vw] font-bold text-white">
          Work in Progress
        </h1>
      </div>
      <div className=" flex place-content-center w-full ">
        <h1 className=" font-wave text-[3.77vw] leading-[4vw] text-white"> Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress Work in Progress wip</h1>
      </div> */}
    </div>
    </div>
  );
};

export default Home;
