import dynamic from "next/dynamic";
// import World from "../components/World";
const World = dynamic(() => import('../components/World'), { ssr: false })
export default function Page() {
  return (
    <>
      <World />
    </>
  );
}
