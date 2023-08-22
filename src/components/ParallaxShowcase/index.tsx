import { useScroll } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";

interface ZoomableImageProps {
  src: string;
}

const Parallax: React.FC<ZoomableImageProps> = ({ src }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [scale, setScale] = useState(1);
  const scale = useRef(1.1);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const cameraX = useRef(0);
  const cameraY = useRef(0);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImage(img);
      drawImage(img);
    };
  }, [src]);

  const zoom = (delta: number) => {
    const targetScale = scale.current + (delta < 0 ? 2 : -2);
    const duration = 300; // ms
    const startTime = performance.now();

    const animate = (timestamp: DOMHighResTimeStamp) => {
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);
      const newScale = lerp(scale.current, targetScale, t);
      scale.current = newScale;
      drawImage(image!);
      console.log(elapsed, t);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        scale.current = targetScale;
      }
    };
    console.log(scale.current);
    requestAnimationFrame(animate);
  };

  // const zoom = (delta: number) => {
  //   let progress = 0;

  //   const animation = () => {
  //     progress += 0.1;
  //     const newScale = scale.current + (delta < 0 ? 0.5 : -0.5);
  //     if (progress < 1) {
  //       requestAnimationFrame(animation);
  //     } else {
  //       scale.current = Math.max(1, newScale);
  //     }
  //     drawImage(image!);
  //   };
  //   animation();
  //   const animate = () => {
  //     progress += 0.1;
  //     if (progress < 1) {
  //       requestAnimationFrame(animate);
  //     } else {
  //       setScale(Math.max(1, newScale));
  //     }
  //     if (image) {
  //       drawImage(image);
  //     }
  //   };
  //   console.log(cameraX, cameraY);
  //   animate();
  // };

  const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  };

  const lerp = (start: number, end: number, t: number) => {
    return start * (1 - t) + end * t;
  };

  const drawImage = (img: HTMLImageElement, posX?: number, posY?: number) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const canvasWidth = img.naturalWidth;
        const canvasHeight = img.naturalHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        if (posX !== undefined && posY !== undefined) {
          ctx.translate(posX, posY);
        } else {
          ctx.translate(canvasWidth / 2, canvasHeight / 2);
        }
        ctx.scale(scale.current, scale.current);
        if (posX !== undefined && posY !== undefined) {
          ctx.translate(-posX, -posY);
        } else {
          ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
        }

        ctx.drawImage(
          img,
          -cameraX.current,
          -cameraY.current,
          canvasWidth,
          canvasHeight
        );
        ctx.restore();
      }
    }
  };

  const moveCamera = (dx: number, dy: number, img: HTMLImageElement) => {
    let progress = 0;
    const canvas = canvasRef.current!;
    const imgScaledWidth = img.naturalWidth * scale.current;
    const imgScaledHeight = img.naturalHeight * scale.current;
    const targetX =
      imgScaledWidth <= canvas.width
        ? (canvas.width - imgScaledWidth) / (scale.current * 2)
        : clamp(
            cameraX.current + dx,
            (canvas.width - imgScaledWidth) / (scale.current * 2),
            (imgScaledWidth - canvas.width) / (scale.current * 2)
          );
    const targetY =
      imgScaledHeight <= canvas.height
        ? (canvas.height - imgScaledHeight) / (scale.current * 2)
        : clamp(
            cameraY.current + dy,
            (canvas.height - imgScaledHeight) / (scale.current * 2),
            (imgScaledHeight - canvas.height) / (scale.current * 2)
          );

    const animate = () => {
      progress += 0.1;
      cameraX.current = lerp(cameraX.current, targetX, progress);
      cameraY.current = lerp(cameraY.current, targetY, progress);
      console.log(progress, cameraX);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        cameraX.current = targetX;
        cameraY.current = targetY;
        console.log(cameraX, cameraY);
      }

      drawImage(img);
    };

    animate();
  };

  const move = (
    delta: number,
    duration: number,
    dx: number,
    dy: number,
    img: HTMLImageElement
  ) => {
    let progres = 0;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const imgScaledWidth = img.naturalWidth * scale.current;
        const imgScaledHeight = img.naturalHeight * scale.current;
        const animate = () => {};
      }
    } else {
      console.log("canvas undefined");
    }
  };

  return (
    <>
      <div className=" w-20">
        <div
          className=" w-80 bg-gray-600 "
          onClick={() => {
            image && moveCamera(-900, -1, image);
          }}
        >
          a
        </div>
        <div
          className=" w-80 bg-gray-600 "
          onClick={() => {
            zoom(-1);
          }}
        >
          a
        </div>
      </div>
      <canvas
        className="border-1 w-[60rem] rounded-md shadow-lg"
        ref={canvasRef}
      />
    </>
  );
};

export default Parallax;
