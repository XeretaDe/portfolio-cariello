import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  BakeShadows,
  Effects,
  Environment,
  Loader,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  PivotControls,
  Sky,
  useHelper,
} from "@react-three/drei";
import {
  DirectionalLightHelper,
  CameraHelper,
  MeshBasicMaterial,
  Color,
} from "three";
import { Perf } from "r3f-perf";
import { Model } from "../Models/ActualLastBlend";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

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
  return (
    <>
      <Canvas
        style={{ height: "100vh", width: "100%" }}
        camera={{ position: [50, 10, 0] }}
        dpr={0.9}
      >
        <Perf />
        {/* <PerspectiveCamera makeDefault={true} /> */}
        <color attach="background" args={["#c1ddef"]} />
        {/* <ambientLight intensity={0.2} />
        <MyLight />
        <directionalLight
          color={"white"}
          position={[1, 4, 0]}
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-bias={-0.0001}
        /> */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1} />
        </EffectComposer>
        <Model />
        <BakeShadows />
      </Canvas>
      <Loader />
    </>
  );
}
