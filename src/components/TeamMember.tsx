
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, index }) => {
  // Generate a consistent but random-looking pastel background color based on the name
  const getBackgroundColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Generate a light pastel color
    const h = hash % 360;
    const s = 20 + (hash % 20); // Low saturation for pastel
    const l = 90 + (hash % 6); // High lightness for pastel
    
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
        <div className="w-12 h-12 rounded-full bg-white/50 mb-4 flex items-center justify-center">
          <span className="text-xl font-medium">{name.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-neutral-600 italic text-sm mt-1">{role}</p>
      </div>
      <p className="text-neutral-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TeamMember;
