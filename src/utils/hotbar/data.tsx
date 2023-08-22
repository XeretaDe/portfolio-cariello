import { AiFillHome, AiOutlinePaperClip } from "react-icons/ai";
import { SiNintendogamecube } from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
export interface Props {
  title: string;
  icon: JSX.Element;
}

export const data: Props[] = [
  {
    title: "Home",
    icon: (
      <AiFillHome className="fill-slate-800 dark:fill-slate-200" size={20} />
    ),
  },
  {
    title: "3D",
    icon: (
      <SiNintendogamecube
        className="fill-slate-800 dark:fill-slate-200"
        size={21}
      />
    ),
  },
  {
    title: "Curriculo",
    icon: (
      <AiOutlinePaperClip
        className="fill-slate-800 dark:fill-slate-200"
        size={20}
      />
    ),
  },
  {
    title: "Configs",
    icon: (
      <BsFillGearFill
        className="fill-slate-800 dark:fill-slate-200"
        size={20}
      />
    ),
  },
];
