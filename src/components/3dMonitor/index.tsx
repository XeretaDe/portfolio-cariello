import { WindowsLogo } from "../../utils/Icons/OsLayoutIcons";
import { useOsState } from "../../store/3dState";
import Image from "next/image";
import Windows11 from "../../../public/desktop/windows11.jpg"

function TaskBar() {
  const apps = useOsState((state) => state.apps_taksbar)
  return (
    <>
      <div className=" absolute bottom-0 flex h-[45px] w-[100vw] place-content-center bg-gray-950/70 border-t border-white/15 backdrop-saturate-150  backdrop-blur-xl pt-1 pb-2 ">
        <div className="w-10 h-full flex place-content-center items-center hover:bg-white/10  hover:outline hover:outline-1 hover:outline-white/15 hover:rounded-md hover:cursor-pointer">
          <WindowsLogo />
        </div>

        <div className=" relative grid grid-cols-5 grid-rows-1">
          {
            apps.map((item, index) => (
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

export function Monitor() {
  return (
    <>
      <main style={{
        backgroundImage: `url(${Windows11.src})`,
        backgroundSize: "1920px 1080px"
      }} className="relative h-[1080px] min-w-[1920px]  text-white">
        <div className=" p-2 font-inter">

          <Desktop />
        </div>
        <TaskBar />
      </main>
    </>
  );
}
