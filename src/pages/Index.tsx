
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <JoinSection />
      </main>
    </div>
  );
};

export default Index;
