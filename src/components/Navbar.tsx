
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12 md:py-6",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="transition-opacity hover:opacity-80">
          <img 
            src="https://www.lsports.eu/wp-content/themes/LSport/img/logo.svg" 
            alt="LSports Logo" 
            className="h-8.5"
          />
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="p-2 rounded-full md:hidden transition-colors hover:bg-black/5"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#team" className="text-sm font-medium text-neutral-800 hover:text-black transition-colors">
            Team
          </a>
          <a href="#join" className="text-sm font-medium text-neutral-800 hover:text-black transition-colors">
            Join Us
          </a>
          <a href="https://www.lsports.eu/careers/" className="text-sm font-medium border border-black px-5 py-2 rounded-full transition-colors hover:bg-black hover:text-white">
            Contact
          </a>
        </nav>

        {/* Mobile menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col md:hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-6">
            <a 
              href="#team" 
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#join" 
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </a>
            <a 
              href="https://www.lsports.eu/careers/" 
              className="text-2xl font-medium py-2 mt-4 border border-black px-5 rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
