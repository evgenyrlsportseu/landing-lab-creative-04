
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedArrowProps {
  className?: string;
}

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ className }) => {
  return (
    <span className={cn("inline-flex items-center group", className)}>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </span>
  );
};

export default AnimatedArrow;
