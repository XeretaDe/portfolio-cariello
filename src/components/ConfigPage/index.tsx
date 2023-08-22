import { useTransition, animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useLanguageStore } from "../../store";

function LangConfig() {
  const {language, setLanguage} = useLanguageStore()

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2000,
    },
  });
 

  return (
    <>
    {language}
      <animated.div style={{ ...props }}>
        <div className=" relative flex h-36 w-96 justify-between items-center rounded-md  bg-light-surface p-4 font-rubik  text-lg shadow-sm dark:bg-dark-surface">
          <div onClick={() => setLanguage("pt-BR")} className="flex items-center h-10 p-2 rounded-md hover:bg-slate-50 hover:cursor-pointer">
            <div className="relative h-6 w-8">
              <Image
                src="/BR.svg"
                alt="bandeira do brasil"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>{" "}
            <span className="ml-2">Portugues</span>
          </div>
          <div className="flex items-center h-10 p-2 rounded-md hover:bg-slate-700 hover:cursor-pointer">
            <div className="relative h-6 w-8">
              <Image
                src="/US.svg"
                alt="bandeira do brasil"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>{" "}
            <span className="ml-2">Inglês</span>
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default function ConfigSection() {
  return (
    <>
      <div className=" relative flex text-black dark:text-white ">
        <LangConfig />
      </div>
    </>
  );
}
