import { useState, useEffect } from "react";
import {
  useSpring,
  animated,
  useTransition,
  useChain,
  useSpringRef,
  ControllerUpdate,
  SpringRef,
} from "@react-spring/web";
import { easings } from "@react-spring/web";
import { useLoadingStore } from "../../store";

function Animation() {
  const { setLoad } = useLoadingStore();
  //#region Refs

  //Referencias para trackear as animações
  const rodrigoRef = useSpringRef();
  const carielloRef = useSpringRef();
  const animationRef1 = useSpringRef();
  const animationRef2 = useSpringRef();

  //#endregion

  //#region estado dos nomes
  const [text2, setText2] = useState("odrigo");
  const [text1, setText1] = useState("ariello");
  const [T, setT] = useState(false);

  //#endregion

  const [entranceAnimation1, api] = useSpring(() => ({
    from: { x: -400, y: -2500, fontSize: 72 },
    // to: [
    //   { x: -300, y: -30 },
    //   { x: -50, delay: 1600 },
    //   { y: -500, delay: 200, fontSize: 60 },
    // ],
    config: {
      duration: 600,
      easing: easings.easeInOutQuad,
    },
    onRest: async () => {
   
      setT(true);
      console.log(T)
    },
  }));
  
  const [entranceAnimation2] = useSpring(() => ({
    from: { x: 0, y: 2500, fontSize: 72 },
    to: [
      { x: 0, y: -30 },
      { x: -80, delay: 1600 },
      {
        x: -75,
        y: -500,
        delay: 200,
        fontSize: 60,
        onRest: () => {
          setLoad(false);
        },
      },
    ],
    config: {
      duration: 600,
      easing: easings.easeInOutQuad,
    },
  }));


  const te = "t"
 

  const [rodrigo] = useSpring(() => ({
    from: { width: "100%" },
    to: { width: "0%" },
    delay: 1200,
    config: {
      duration: 600,
      easing: easings.linear,
    },
    onChange: ({ value }) => {
      // console.log(value);
      // console.log(typeof value.width, "odrigo".length);
      // const percent = parseFloat(value.width.slice(0, -1));
      // const numChars = Math.round((percent * "odrigo".length) / 100);
      // // console.log(numChars);
      // setText2("odrigo".substring(0, numChars));
      // console.log(value);
      // console.log(value.width, "odrigo".length);
      const percent = parseFloat(value.width.slice(0, -1));
      // console.log(percent);
      const numChars = Math.round((percent * "odrigo".length) / 100);
      // console.log(numChars, "char");
      setText2(text2.substring(0, 0 + numChars));
    },
  }));

  const [cariello] = useSpring(() => ({
    from: { width: "100%" },
    to: { width: "0%" },
    delay: 1200,
    config: {
      duration: 600,
      easing: easings.linear,
    },
    onChange: ({ value }) => {
      // console.log(value);
      // console.log(value.width, "ariello".length);
      const percent = parseFloat(value.width.slice(0, -1));
      // console.log(percent);
      const numChars = Math.round((percent * "ariello".length) / 100);
      // console.log(numChars, "char");
      setText1(text1.substring(0, 0 + numChars));
    },
  }));

  useEffect(() => {
    console.log("a");

    // Test();
  }, []);

  return (
    <div>
      <animated.div
        className=" font-rubik text-7xl font-bold italic tracking-tight text-black "
        style={{
          borderRadius: 4,
        }}
      >
        <div className="flex w-full">
          <animated.span
            className="absolute"
            style={{ ...rodrigo, ...entranceAnimation1 }}
          >
            R{text2}
          </animated.span>
          <animated.span
            className="absolute"
            style={{ ...cariello, ...entranceAnimation2 }}
          >
            C{text1}
          </animated.span>
        </div>
      </animated.div>
    </div>
  );
}

export default function Loader() {
  const [isMounted, setMounted] = useState(false);
  const { isFirstTime } = useLoadingStore();

  // useEffect set isMounted pra não dar hydratation error quando checkar por isFirstTime
  // posso usar um useState pra troca de elemento mas esse fica mais clean

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{isMounted && <>{isFirstTime ? <Animation /> : null}</>}</>;
}
