import { SpringRef, ControllerUpdate } from "@react-spring/web";

type duration = number[] | number;
type delay = number[] | number;

interface IProps {}
interface IAnimationController {
  ref: SpringRef | SpringRef[];
  n: duration;
  timeline: () => Promise<void>;
}

function isSingle(obj: any): obj is SpringRef {
  return (obj as SpringRef).name !== undefined;
}

function isArray(obj: any): obj is SpringRef[] {
  return (obj as SpringRef[]).values !== undefined;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function hasDelayProperty(object: unknown): boolean {
  if (!isObject(object)) {
    return false;
  }

  if (object.hasOwnProperty("delay")) {
    return true;
  }

  for (const value of Object.values(object)) {
    if (isObject(value) && hasDelayProperty(value)) {
      return true;
    }
  }

  return false;
}

type NestedObject = {
  [key: string]: any | NestedObject;
};

type Props = ControllerUpdate & {
  y?: number;
  delay?: number;
  timeline_time: number;
  config?: {
    duration?: number;
    easing?: (t: number) => number;
  };
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function Delay(obj: any) {
//   console.log(hasDelayProperty(obj));
// }

function next<T extends NestedObject & Props>(props: T, ref: SpringRef) {
  console.log(props);
  const duration = props.config?.duration ?? 1000;
  let delay: number;
  if (hasDelayProperty(props)) {
    delay = props.delay ?? 0;
  }
  // if(props.timeline_time > 0) {
  //   return new Promise<void>(async (resolve) => {
  //     ref.start({...props})
  //     await sleep(duration + delay + props.timeline_time)
  //     resolve()
  //   })
  // }

  return new Promise<void>(async (resolve, reject) => {
    // console.log(props);
    ref.start({ ...props });
    await sleep(1000);
    resolve();
  });
}
