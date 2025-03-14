
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Preload image for hero section
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
