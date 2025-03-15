
import React, { useRef, useEffect, useState } from 'react';
import { createNoise2D } from 'simplex-noise';

interface WaveBackgroundProps {
  colors?: string[];
  waveWidth?: number;
  speed?: number;
  blurIntensity?: number;
  backgroundColor?: string;
  backgroundOpacity?: number;
  waveOpacity?: number;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
  colors = ['#9b87f5', '#D946EF', '#0EA5E9'],
  waveWidth = 0.01,
  speed = 0.002,
  blurIntensity = 30,
  backgroundColor = 'rgba(255, 255, 255, 0)',
  backgroundOpacity = 1,
  waveOpacity = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    // Animation frame fade-in with 0.5s delay
    const fadeInTimeout = setTimeout(() => {
      const startTime = Date.now();
      const duration = 1000; // 1 second fade in
      
      const animateFadeIn = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setOpacity(progress);
        
        if (progress < 1) {
          requestAnimationFrame(animateFadeIn);
        }
      };
      
      requestAnimationFrame(animateFadeIn);
    }, 500);
    
    return () => clearTimeout(fadeInTimeout);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    let animationFrameId: number;
    let noise: ReturnType<typeof createNoise2D>;
    
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create new noise function
    noise = createNoise2D();
    
    let time = 0;
    
    // Wave rendering function
    const drawWaves = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with background color
      ctx.fillStyle = backgroundColor;
      ctx.globalAlpha = backgroundOpacity;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add blur effect if specified
      if (blurIntensity > 0) {
        ctx.filter = `blur(${blurIntensity}px)`;
      } else {
        ctx.filter = 'none';
      }
      
      // For each color, generate a wave
      colors.forEach((color, index) => {
        const heightOffset = (index / colors.length) * canvas.height;
        const amplitude = canvas.height * 0.1; // Wave height
        
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        // Draw wave points
        for (let x = 0; x < canvas.width; x += 5) {
          // Create different wave patterns for each color using noise
          const y = heightOffset + 
                   amplitude * 
                   noise(x * waveWidth, 
                        time + index * 1000) + // Offset each color's time
                   (canvas.height / 2); 
          
          ctx.lineTo(x, y);
        }
        
        // Complete the wave path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // Fill with color and opacity
        ctx.fillStyle = color;
        ctx.globalAlpha = waveOpacity;
        ctx.fill();
      });
      
      // Reset filters and alpha
      ctx.filter = 'none';
      ctx.globalAlpha = 1;
      
      // Update time for animation
      time += speed;
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(drawWaves);
    };
    
    drawWaves();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, waveWidth, speed, blurIntensity, backgroundColor, backgroundOpacity, waveOpacity]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[-1] transition-opacity duration-1000"
      style={{ opacity }}
    />
  );
};

export default WaveBackground;
