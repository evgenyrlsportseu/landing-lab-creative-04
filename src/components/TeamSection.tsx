
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import TeamMember from './TeamMember';
import { cn } from '@/lib/utils';

// Team member data
const teamMembers = [
  {
    name: "Yifat Noff",
    role: "Director of Marketing",
    description: "Turning customer insights into brand gold"
  },
  {
    name: "Ariel Cohen",
    role: "Content Manager",
    description: "Crafting stories that customers actually read"
  },
  {
    name: "Assaf Cohen",
    role: "Communication & Community Lead",
    description: "Making communities grow faster than memes"
  },
  {
    name: "Josefin Shafrir",
    role: "Event Marketing Manager",
    description: "Creating events people talk about for weeks"
  },
  {
    name: "Eyal Fadlon",
    role: "Digital Marketing & Analytics",
    description: "Decoding analytics like it's child's play"
  },
  {
    name: "Evgeny Rodionov",
    role: "Web Project Manager",
    description: "Juggling projects without dropping deadlines"
  },
  {
    name: "Udi Simon",
    role: "Social Media Manager",
    description: "Mastering algorithms so your brand gets likes"
  },
  {
    name: "John Costello",
    role: "Content Manager Team Lead",
    description: "Turning content chaos into seamless strategy"
  },
  {
    name: "Peleg Buyum",
    role: "Graphic Design Manager",
    description: "Visual storytelling that stops scrolls"
  },
  {
    name: "Igor Rumyantsev",
    role: "Graphic Designer",
    description: "Making visuals worth a thousand clicks"
  },
  {
    name: "Sveta Asulin",
    role: "Graphic Designer",
    description: "Designing graphics that speak louder than words"
  },
  {
    name: "Shani Rosh",
    role: "Marketing Operations Manager",
    description: "Making sure the marketing machine never sleeps"
  }
];

const TeamSection: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: quoteRef, inView: quoteInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <div className={cn(
            "inline-block px-4 py-1 bg-gradient-candy text-white text-xs tracking-widest rounded-full mb-4",
            "transform transition-all duration-700",
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            UNLIMITED POTENTIAL
          </div>
          
          <h2 className={cn(
            "mb-6 text-balance text-orange-700",
            "transform transition-all duration-700 delay-100",
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            The Team That Changes the Game
          </h2>
          
          <p className={cn(
            "max-w-2xl mx-auto text-orange-600 text-lg text-balance",
            "transform transition-all duration-700 delay-200",
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            We do more than marketing—we set new standards. Each member of our team enhances the overall strategy, turning ideas into measurable results.
          </p>
        </div>
        
        <div 
          ref={quoteRef}
          className={cn(
            "max-w-2xl mx-auto mb-20 px-6 py-10 border-l-4 border-orange-500 bg-orange-100",
            "transform transition-all duration-700",
            quoteInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}
        >
          <blockquote className="text-xl md:text-2xl italic text-orange-700 text-balance">
            "Great things in business are never done by one person; they're done by a team of people."
          </blockquote>
          <div className="mt-4 text-sm font-medium text-orange-500">
            — Steve Jobs
          </div>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
