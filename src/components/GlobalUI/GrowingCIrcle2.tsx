import { useContext, useState, useRef, useEffect, MouseEvent } from "react";
import { GlobalLayout } from "../../context/UIContext";
interface CircleProps {
  ctx: CanvasRenderingContext2D | null;
  isDarkMode: boolean | null;
  width: number | null;
  height: number | null;
  radius: number | null;
  max_radius: number | null;
  timeAtPreviousDraw: Date | null;
  create: (ctx: CanvasRenderingContext2D | null, isDarkMode: boolean) => void;
  start: () => () => void;
  grow: () => void;
  shrink: () => void;
  verify: () => void;
  draw: () => void | Promise<any>;
}

interface CoordinatesProps {
  x: number | null;
  y: number | null;
  reset: () => void;
}

const Coordinates: CoordinatesProps = {
  x: null,
  y: null,
  reset: () => {
    Coordinates.x = null;
    Coordinates.y = null;
  },
};

const Circle: CircleProps = {
  ctx: null,
  isDarkMode: null,
  width: null,
  height: null,
  radius: null,
  max_radius: null,
  timeAtPreviousDraw: null,
  create: (ctx, isDarkMode) => {
    Circle.ctx = ctx;
    Circle.isDarkMode = isDarkMode;
    Circle.width = Math.max(window.screen.width, window.innerWidth);
    Circle.height = Math.max(window.screen.height, window.innerHeight);
    Circle.radius = 50;
    const { width, height } = ctx?.canvas?.getBoundingClientRect() as DOMRect;
    if (
      Circle.ctx?.canvas.width !== width ||
      Circle.ctx.canvas.height !== height
    ) {
      const { devicePixelRatio: originalRatio = 1 } = window;
      const lowerResolutionRatio = originalRatio * 0.8;
      if (Circle.ctx) {
        Circle.ctx.canvas.width = width * lowerResolutionRatio!;
        Circle.ctx.canvas.height = height * lowerResolutionRatio!;
        Circle.ctx.scale(lowerResolutionRatio, lowerResolutionRatio);
      }
    }
    Circle.ctx?.clearRect(0, 0, Circle.width, Circle.height);
    return Circle.draw();
  },
  start: () => (Circle.isDarkMode ? Circle.shrink : Circle.grow),
  grow: () => {},
  shrink: () => {},
  verify: () => {},
  draw: () => {
    if (Circle.ctx) {
      Circle.ctx.fillStyle = "red";
      Circle.ctx.beginPath();
      Circle.ctx.arc(Coordinates.x!, Coordinates.y!, 100, 0, 2 * Math.PI);
      Circle.ctx.fill();
    }
  },
};

// Função parar capturar as coordenadas do click
export const StoreCoordinatesOnClick = (
  event: React.MouseEvent<HTMLElement>
) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elementTarget = event.currentTarget.getBoundingClientRect();
  const offsetLeft = elementTarget.left - bodyRect.left;
  Coordinates.x = event.clientX;
  Coordinates.y = event.clientY;
};

function GrowingCircle2() {
  const { isClicked } = useContext(GlobalLayout);
  const CanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = CanvasRef.current?.getContext("2d")!;
    Circle.create(ctx, isClicked);
  }, [isClicked]);
  return (
    <div className="relative">
      <canvas ref={CanvasRef} className="w-[100vw] h-[100vh] fixed " />
    </div>
  );
}

export default GrowingCircle2;
