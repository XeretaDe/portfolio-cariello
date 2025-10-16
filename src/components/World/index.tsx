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
      <directionalLight 
        ref={ref}
        color={"blue"}
        position={[1, 10, 0]}
        intensity={0.1} 
        castShadow={true}
        shadow-mapSize-height={4096}
        shadow-mapSize-width={4096}
        shadow-bias={-0.0001}
        shadow-camera-left={-200}    
        shadow-camera-right={200}    
        shadow-camera-top={200}      
        shadow-camera-bottom={-200}  
        shadow-camera-near={1}   
        shadow-camera-far={500}     
      />
      {/* Caso queira usar helper de posição da camera de luz sei lá ativa ai */}
        {/* {ref.current && ( 
          <cameraHelper args={[ref.current.shadow.camera]} />
        )} */}
    </>
  );
};

const CameraPerspective = () => {
  const camera = useRef<any>(null);
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
        shadows
      >
        <Perf />
        {/* <PerspectiveCamera makeDefault={true} /> */}
        <color attach="background" args={["#c1ddef"]} />
        <MyLight />
        {/*<OrbitControls></OrbitControls> {/*Para debugar posições, comentar prod */ }
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={0.3} />
        </EffectComposer>
        <Model />
        <BakeShadows />
      </Canvas>
      <Loader />
    </>
  );
}
