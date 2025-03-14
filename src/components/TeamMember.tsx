
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, index }) => {
  // Generate a consistent but random-looking bright background color based on the name
  const getBackgroundColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Generate a bright pastel color
    const h = hash % 360;
    const s = 70 + (hash % 20); // Higher saturation for brighter colors
    const l = 80 + (hash % 8); // High lightness for bright pastels
    
    return `hsl(${h}, ${s}%, ${l}%)`;
  };
  
  const bgColor = getBackgroundColor(name);
  
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl transition-all duration-300 group",
        "hover:shadow-lg hover:-translate-y-1",
        "animate-fade-in"
      )}
      style={{ 
        backgroundColor: bgColor,
        animationDelay: `${100 * (index % 10)}ms`,
      }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-white/60 mb-4 flex items-center justify-center">
          <span className="text-xl font-medium">{name.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-neutral-700 italic text-sm mt-1">{role}</p>
      </div>
      <p className="text-neutral-800 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TeamMember;
