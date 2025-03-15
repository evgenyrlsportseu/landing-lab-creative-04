
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

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
    h = ctx.canvas.height = canvas.offsetHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    
    const handleResize = () => {
      if (!canvas) return;
      w = ctx.canvas.width = canvas.offsetWidth;
      h = ctx.canvas.height = canvas.offsetHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    
    window.addEventListener('resize', handleResize);
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  const waveColors = colors ?? [
    "#9b87f5", // Primary Purple
    "#7E69AB", // Secondary Purple
    "#D946EF", // Magenta Pink
    "#0EA5E9", // Ocean Blue
    "#6E59A5"  // Tertiary Purple
  ];
  
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 30;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 80;
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
    const cleanupFn = init();
    return () => {
      if (cleanupFn) cleanupFn();
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

  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "w-full overflow-hidden relative",
        containerClassName
      )}
      style={{ 
        height: `${height}px`,
        opacity,
        transition: 'opacity 0.8s ease-in-out'
      }}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
    </div>
  );
};

export default WavyBackground;
