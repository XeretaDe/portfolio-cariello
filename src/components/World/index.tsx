import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  useHelper,
} from "@react-three/drei";
import { Cena } from "../Models/Cena";
import { DirectionalLightHelper } from "three";

const MyLight = () => {
  const ref = useRef<any>(null);
  // I want to attach  onClickEvent in this lightHelper.

  useHelper(ref, DirectionalLightHelper);

  return (
    <>
      <directionalLight intensity={0.1} ref={ref} position={[5, 5, 5]} />
    </>
  );
};

export default function World() {
  return (
    <>
      <div className=" min-h-screen w-full ">
        <Canvas style={{ width: "100%", height: "100vh" }}>
          <PerspectiveCamera position={[5, 40, 0]} makeDefault />
          <color attach="background" args={["#c1ddef"]} />
          <Sky inclination={0.52} distance={500} />
          <ambientLight intensity={0.2} />
          <MyLight />
          <directionalLight
            color={"orange"}
            position={[1, 4, 0]}
            intensity={0.15}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            shadow-bias={-0.0001}
          />

          <Cena />
          {/* <Environment files={"http://localhost:3000/envmap.hdr"} background /> */}
          {/* <PerspectiveCamera makeDefault fov={40}  position={[0, 2, 10]}  /> */}
          {/* <OrbitControls target={[-2.64, -0.71, 0.03]} /> */}

          {/* <Box
              scale={0.5}
              onPointerEnter={(e) => console.log(e.currentTarget)}
              castShadow
              receiveShadow
              position={[0, 0.5, 1]}
            >
              <meshStandardMaterial attach="material" color="white" />
            </Box> */}
        </Canvas>
        <Loader />
      </div>
    </>
  );
}
