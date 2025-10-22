import { Box } from "@react-three/drei";
import { Vector3 } from "three";

function BoxSafeGuard({
    pos,
    color,
    opacity,
    size,
    name,
  }: {
    pos: Vector3;
    color?: string;
    opacity: number;
    size: Vector3;
    name: string;
  }) {
    return (
      <>
        <Box
          name="Box"
          position={pos}
          scale={size}
          onPointerEnter={() => setHovering(true)}
          onPointerLeave={() => setHovering(false)}
          onClick={(e) => {
            e.stopPropagation();
            console.log(
              e.object.getWorldPosition(new Vector3()),
              e.object.name,
            );
            const { x, y, z } = e.object.getWorldPosition(new Vector3());
            setObject({
              name: name,
              position: new THREE.Vector3(x, y, z),
            });
            setClicked(!isClicked);
          }}
        >
          <meshPhongMaterial color="#ff0000" opacity={opacity} transparent />
        </Box>
      </>
    );
  }
