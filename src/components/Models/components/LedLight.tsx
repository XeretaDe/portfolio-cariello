import { useGLTF} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Vector3, InstancedMesh, Matrix4, Color, Euler } from "three";
import { GLTF} from "three-stdlib";

// types
type LEDProps = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Plane_1: THREE.Mesh;
  };
  materials: {
    ["LED Stripe"]: THREE.MeshStandardMaterial;
    ["LED Light"]: THREE.MeshStandardMaterial;
  };
};

const RectArealightWithHelper = ({
  position,
  color,
  rotation,
}: {
  position: number[];
  color: string | Color;
  rotation?: number[];
}) => {
  const meshRef = useRef<any>(null);
  // helper caso precise modificar a posição 
  // useHelper(meshRef, RectAreaLightHelper, "blue");

  return (
    <>
      <group>
        <rectAreaLight
          ref={meshRef}
          rotation={rotation as unknown as Euler}
          castShadow
          width={1}
          height={21}
          color={color}
          intensity={15}
          position={position as unknown as Vector3}
        />
      </group>
    </>
  );
};

export function LedStripes(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/LED.glb") as LEDProps;

  const meshRef1 = useRef<InstancedMesh>(null);
  const meshRef2 = useRef<InstancedMesh>(null);

  useEffect(() => {
    const tempMatrix = new Matrix4();
    if (meshRef1.current && meshRef2.current) {
      for (let i = 0; i < 20; i++) {
        tempMatrix.makeTranslation(i * 1.12, 0, 0);
        meshRef1.current.setMatrixAt(i, tempMatrix);
        meshRef2.current.setMatrixAt(i, tempMatrix);
      }

      for (let a = 20; a < 40; a++) {
        tempMatrix.makeTranslation(-0.5, a * 1.1 - 21.4, 0);
        tempMatrix.multiply(new Matrix4().makeRotationZ(-Math.PI / 2));
        meshRef1.current.setMatrixAt(a, tempMatrix);
        meshRef2.current.setMatrixAt(a, tempMatrix);
      }

      meshRef1.current.instanceMatrix.needsUpdate = true;
      meshRef2.current.instanceMatrix.needsUpdate = true;
      console.log(meshRef1.current.rotation, meshRef2.current.rotation);
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-28.865, 19.268, 28.15]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      >
        <RectArealightWithHelper
          position={[0.1, 10, -0.1]}
          color={materials["LED Light"].emissive}
          rotation={[0, 3.15, 0]}
        />
        <RectArealightWithHelper
          position={[12, 0.55, 0]}
          color={materials["LED Light"].emissive}
          rotation={[0, 3.15, Math.PI / 2]}
        />
        <instancedMesh
          ref={meshRef1}
          args={[nodes.Plane.geometry, materials["LED Stripe"], 40]}
        />
        <instancedMesh
          ref={meshRef2}
          args={[nodes.Plane_1.geometry, materials["LED Light"], 40]}
        />
      </group>
    </group>
  );
}
