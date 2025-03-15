
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  height = 200,
  ...props
}: {
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  height?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(0);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = canvas.offsetWidth;
    h = ctx.canvas.height = height;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        w = ctx.canvas.width = entry.contentRect.width;
        h = ctx.canvas.height = height;
        ctx.filter = `blur(${blur}px)`;
      }
    });
    
    resizeObserver.observe(canvas.parentElement);
    
    // Fade in animation
    setTimeout(() => {
      setOpacity(1);
    }, 500);
    
    render();
    
    return () => {
      resizeObserver.disconnect();
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "rgba(255, 255, 255, 0)";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    const initTimeout = setTimeout(() => {
      init();
    }, 100);
    
    return () => {
      clearTimeout(initTimeout);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn("relative w-full", containerClassName)}
      style={{ height: `${height}px`, opacity, transition: "opacity 0.8s ease-in-out" }}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10 h-full", className)} {...props} />
    </div>
  );
};

export default WavyBackground;
