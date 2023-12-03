import { useRef, useState } from "react";
import { GLTFResult } from "../components/Models/types/MainScene";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { ObjectProps } from "../types/MainScene";

// interface MyMap<T extends object = {}> {
//     set<K extends keyof T>(k: K, v: T[K]): this;
//     set<K extends string, V>(k: Exclude<K, keyof T>, v: V): MyMap<T & Record<K, V>>;
//     get<K extends string>(k: K): K extends keyof T ? T[K] : undefined;
//   }





type secondT = {
  Position?: Vector3;
  Rotation?: Vector3;
};



export default function useCamera(object: ObjectProps, clicked: boolean) {
  const lerp_constant = 0.05;
  const vectorLookAt = useState(() => new Vector3())[0];
  const initialPosition = new Vector3(-10, 18.5, 11.72);


  // configurações únicas para cada objeto interagível
  const Settings = useRef(
    new Map<string, secondT>([
      [
        "Livro",
        {
          Position: new Vector3(0.5, 2.8, -1.6),
        },
      ],
      [
        "Vitrola",
        {
          Position: new Vector3(3, 1, -1.5),
          Rotation: new Vector3(0, -1, 0),
        },
      ],
      [
        "Monitor",
        {
          Position: new Vector3(4, 0, 0),
          Rotation: new Vector3(0, 0, 0),
        },
      ],
      [
        "Teclado",
        {
          Position: new Vector3(0, 3, 3),
          Rotation: new Vector3(0, 0, -3),
        },
      ],
      [
        "Default",
        {
          Rotation: new Vector3(0, 0, 0),
        },
      ],
    ]),
  );

  // pega as posições e rotações únicas de cada objeto em tela interagível
  const Position = Settings.current.get(object.name)?.Position || new Vector3();
  const Rotation = Settings.current.get(object.name)?.Rotation || new Vector3();

  // pega a posição do object e adiciona um gap
  const targetPosition = object.position.clone().add(Position);

  // target do objeto que queremos observar, mais o gap. "Rotation" é usado porque a rotação é feita a partir do lookat method e não do vector3 principal
  // portanto, o target é passado pro lookat para fazer a rotação baseada numa distancia custom
  const target = new Vector3(
    object.position.x + Rotation.x,
    object.position.y + Rotation.y,
    object.position.z + Rotation.z,
  );

  // target do look at inicial
  const initialTarget = new Vector3(-26.967, 10.242, 16.06);

  useFrame((state, delta) => {
    // checka se algum item foi clicado. se sim, vai para o objeto baseando-se nos valores passados, se não, volta pro incio com os valores pré estipulados
    if (clicked) {
      state.camera.position.lerp(targetPosition, lerp_constant);
      state.camera.lookAt(vectorLookAt.lerp(target, lerp_constant));
    } else {
      state.camera.position.lerp(initialPosition, 0.009);
      state.camera.lookAt(vectorLookAt.lerp(initialTarget, 0.009));
    }
    state.camera.updateProjectionMatrix();
  });
}
