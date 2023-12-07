import { JSX } from "@react-three/fiber";
import { Scene } from "three";
// import { UnrealBloomPass, RenderPass } from 'three-stdlib';
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { Object3DNode } from "@react-three/fiber";

//  three stdlib
// declare global {
//  namespace JSX {
//   interface IntrinsicElements {
//     unrealBloomPass: JSX.IntrinsicElements['effectComposer'] & {
//       args?: ConstructorParameters<typeof UnrealBloomPass>
//     } & {
//       threshold?: number;
//       strength?: number;
//       radius?: number;
//     }
//   }
//  }
// }

declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: { args?: ConstructorParameters<typeof UnrealBloomPass> };
      effectComposer: {
        args?: ConstructorParameters<typeof EffectComposer>;
        children?: ReactNode;
        scene?: Scene;
        ref?: RefObject<any>;
      };
      renderPass: { args?: ConstructorParameters<typeof RenderPass> };
      customBloomMaterial: Object3DNode<CustomBloomMaterial, typeof CustomBloomMaterial>;
    }
  }
}
