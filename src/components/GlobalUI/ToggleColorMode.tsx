import { useContext, useState, useEffect, useRef } from "react";
import { GlobalLayout } from "../../context/UIContext";
import { useSpring, animated } from "@react-spring/web";
import { StoreCoordinatesOnClick } from "./GrowingCIrcle2";
import { useThemeStore } from "../../store";

function ToggleColorMode({
  isDark,
  onClickMethod,
}: {
  isDark?: boolean;
  onClickMethod?: any;
}) {
  const [isHovering, setHovering] = useState(false);
  const { setIsClicked } = useContext(GlobalLayout);
  const { setTheme, theme } = useThemeStore();
  const props = useSpring({
    scale: isHovering ? 1.25 : 1,
    backgroundColor: theme ? "white" : "#0B0B0B",
  });
  function TailwindToggle() {
    if (theme === false) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className=" absolute right-5 top-3 z-10 m-1">
      <animated.div
        style={props}
        onClick={(event) => {
          StoreCoordinatesOnClick(event);
          // setIsClicked((isClicked) => !isClicked);
          setTheme();
          TailwindToggle();
        }}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`w-3 overflow-hidden rounded-full p-3 hover:scale-110 hover:cursor-pointer`}
      ></animated.div>
    </div>
  );
}

export default ToggleColorMode;
