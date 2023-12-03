import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {
  Loader,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  PivotControls,
  Sky,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper, CameraHelper } from "three";
import { Perf } from "r3f-perf";
import { Model } from "../Models/ActualLastBlend";

const MyLight = () => {
  const ref = useRef<any>(null);
  useHelper(ref, DirectionalLightHelper);
  return (
    <>
      <directionalLight intensity={0.1} ref={ref} position={[5, 5, 5]} />
    </>
  );
};

const CameraPerspective = () => {
  const camera = useRef<any>();
  useHelper(camera, CameraHelper);
  return (
    <>
      <PivotControls
        rotation={[0, -Math.PI / 2, 0]}
        depthTest={false}
        lineWidth={2}
        anchor={[0, 1, 0]}
      >
        <PerspectiveCamera
          ref={camera}
          position={[0.23, 22.5, 11.72]}
          far={1}
          fov={40}
        />
      </PivotControls>
    </>
  );
};

export default function World() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <>
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ position: [50, 10, 0] }}
      >
        <Perf />
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
        {/* <PerspectiveCamera makeDefault position={[0.23,22.5,11.72]} far={1} fov={40}/> */}
        <CameraPerspective />
        <color attach="background" args={["#c1ddef"]} />
        <Sky inclination={0.52} distance={500} />
        <ambientLight intensity={0.5} />
        <MyLight />
        <directionalLight
          color={"red"}
          position={[1, 4, 0]}
          intensity={0.45}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-bias={-0.0001}
        />

        <Model />
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
          {/* <OrbitControls/>   */}
      </Canvas>
      <Loader />
    </>
  );
}
