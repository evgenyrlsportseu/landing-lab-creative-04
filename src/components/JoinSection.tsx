
import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedArrow from './AnimatedArrow';
import { cn } from '@/lib/utils';

const JoinSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="join" className="py-24 px-6 bg-purple-50">
      <div 
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto rounded-3xl overflow-hidden relative",
          "transform transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-12 md:p-24 relative z-10">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-6">Join Our Team</h2>
            <p className="text-white/90 text-lg mb-10">
              We're always looking for talented individuals who share our commitment to excellence and innovation. Together, we'll create the future.
            </p>
            
            <a 
              href="https://www.lsports.eu/careers/" 
              className="inline-flex items-center gap-2 font-medium text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-3 hover:bg-white/30 transition-colors"
            >
              Contact Us <AnimatedArrow className="text-white" />
            </a>
          </div>
          
          {/* Abstract design elements */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
