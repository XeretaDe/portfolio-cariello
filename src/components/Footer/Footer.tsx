import {AiOutlineGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"


export const Footer: React.FC = () => {
    var Ano = new Date().getFullYear()
  return (
    <>
        <div className="absolute bottom-0 font-inter w-full mb-1">
            <div className="relative flex gap-4 place-content-center transition delay-600 ease-InOutCirc">
            <AiOutlineGithub size={40} className=" hover:cursor-pointer hover:scale-110 dark:fill-white"/>
            <AiFillLinkedin size={40} className=" hover:cursor-pointer hover:scale-110 dark:fill-white "/>
            <AiFillInstagram size={40} className=" hover:cursor-pointer hover:scale-110 dark:fill-white "/>
            </div>
            {/* <div className=" relative flex place-content-center dark:text-slate-50 transition delay-600">
            ©{Ano} - Rodrigo Cariello
            </div> */}
        </div>
    </>
  )
}