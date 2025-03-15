
import React, { useEffect, useRef } from 'react';
import AnimatedArrow from './AnimatedArrow';
import { cn } from '@/lib/utils';
import { WavyBackground } from '@/components/ui/wavy-background';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    
    const hero = heroRef.current;
    
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);
  
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <WavyBackground 
        backgroundFill="white" 
        colors={["#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1"]} 
        waveOpacity={0.3}
        blur={15}
        containerClassName="absolute inset-0 z-0"
        className="w-full h-full"
      />
      
      <div 
        ref={heroRef}
        className="max-w-7xl w-full mx-auto transition-transform duration-300 ease-out px-6 pt-24 pb-16 z-10 relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="hero-text-gradient text-balance animate-fade-in">
            LSports Marketing
          </h1>
          
          <div className="w-16 h-0.5 bg-black/20 my-8 animate-fade-in" style={{ animationDelay: '200ms' }}></div>
          
          <a 
            href="#team" 
            className={cn(
              "group inline-flex items-center gap-2 text-xl font-medium",
              "hover:opacity-70 transition-opacity duration-300",
              "animate-fade-in"
            )}
            style={{ animationDelay: '400ms' }}
          >
            Discover Excellence <AnimatedArrow />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float z-20">
        <div className="w-5 h-10 border-2 border-black/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-black/40 rounded-full mt-2 animate-fade-in animate-float"></div>
        </div>
        <span className="text-xs text-black/40 mt-2">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
