import { AiFillHome, AiOutlinePaperClip } from "react-icons/ai";
import { SiNintendogamecube } from "react-icons/si";
import { JSX } from "react";
export interface Props {
  title: string;
  icon: JSX.Element;
  url: string;
}

export const data: Props[] = [
  {
    title: "Home",
    url: "/mainPage",
    icon: (
      <AiFillHome className="fill-slate-800 dark:fill-slate-200" size={20} />
    ),
  },
  {
    title: "3D",
    url: "/experience",
    icon: (
      <SiNintendogamecube
        className="fill-slate-800 dark:fill-slate-200"
        size={21}
      />
    ),
  },
  {
    title: "Curriculo",
    url: "/undefined", // TO DO PLACEHOLDER
    icon: (
      <AiOutlinePaperClip
        className="fill-slate-800 dark:fill-slate-200"
        size={20}
      />
    ),
  },
];
