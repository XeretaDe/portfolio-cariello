import { WindowsLogo } from "../../../utils/Icons/OsLayoutIcons";
import { useOsState } from "../../../store/3dState";
import Image from "next/image";
import Windows11 from "../../../../public/desktop/windows11.jpg"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState, useEffect } from "react";
import { motion } from "framer-motion";

function TaskBar() {
    const apps = useOsState((state: { apps_taksbar: any; }) => state.apps_taksbar)
    return (
        <>
            <div className=" absolute bottom-0 flex h-[45px] w-[100vw] place-content-center bg-gray-950/70 border-t border-white/15 backdrop-saturate-150  backdrop-blur-xl pt-1 pb-2 ">
                <div className="w-10 h-full flex place-content-center items-center hover:bg-white/10  hover:outline hover:outline-1 hover:outline-white/15 hover:rounded-md hover:cursor-pointer">
                    <WindowsLogo />
                </div>

                <div className=" relative grid grid-cols-5 grid-rows-1">
                    {
                        apps.map((item: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: any) => (
                            <div className="text-yellow-500">{item.name}</div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}

// pasta, pdf, visual studio, chrome 
function Desktop
    () {
    const gridSettings = {
        w: 15,
        h: 15
    }

    const DesktopApps = [
        {
            name: "folder",
            path: "/desktop/folder-240.svg"
        },
        {
            name: "projetos",
            path: "/desktop/visual_studio.svg"
        },
        {
            name: "curriculo",
            path: "/desktop/pdf.svg"
        }
    ]

    return (
        <>
            <div style={{
                gridTemplateColumns: "repeat(auto-fit, 70px)",
                gridTemplateRows: "repeat(13, 70px)",
                gridAutoFlow: "column"
            }} className=" grid gap-2 w-full h-full ">
                {DesktopApps.map((i, index) => {
                    return (
                        <div key={index} className="h-full p-2 flex place-content-center items-center flex-col hover:bg-white/10 hover:cursor-pointer">
                            <Image width={45} height={45} src={i.path} alt="folder" />
                            <span>{i.name}</span>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

const BootScreen = () => (
    <div className="w-full h-full flex flex-col justify-center items-center text-white gap-8">

        <svg width="80" height="80" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0078D4" d="M114.2 114.2H21.5V21.5h92.7v92.7zm120.3 0H141.8V21.5h92.7v92.7zM114.2 234.5H21.5v-92.7h92.7v92.7zm120.3 0H141.8v-92.7h92.7v92.7z" />
        </svg>

        <motion.div
            className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
            }}
        />

        <p>Starting up...</p>
    </div>
);
interface MonitorProps {
    isPowerOn: boolean;
}


export function Monitor({ isPowerOn }: MonitorProps) {
    const [bootState, setBootState] = useState<'booting' | 'desktop'>('booting');

    useEffect(() => {
        if (isPowerOn) {
            setBootState('booting');
            const timer = setTimeout(() => {
                setBootState('desktop');
            }, 4000); // 4-second boot time
            return () => clearTimeout(timer);
        }
    }, [isPowerOn]);

    return (
        <main
            className={`relative w-[1920px] h-[1080px] bg-black overflow-hidden font-sans `}
        >
            {bootState === 'booting' && <BootScreen />}

            {bootState === 'desktop' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}

                    style={{
                        backgroundImage: `url(${Windows11.src})`,
                        backgroundSize: "1920px 1080px"
                    }}
                    className="relative h-[1080px] min-w-[1920px]  text-white"
                >
                    <div className="p-2 font-inter">
                        <Desktop />
                    </div>
                    <TaskBar />
                </motion.div>
            )}
        </main>
    );
}