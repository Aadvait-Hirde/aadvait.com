'use client';

import { useState, useEffect } from 'react';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Start scrolling immediately
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Close menu without waiting
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-[#3f031c]/95 z-50 flex items-center justify-center transition-opacity duration-150 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 md:top-12 md:right-12 text-white text-4xl hover:scale-110 transition-all duration-300 flex items-center justify-center w-12 h-12"
      >
        ×
      </button>
      <nav className={`flex flex-col gap-8 text-center transition-all duration-200 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, '#about')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          About
        </a>
        <a 
          href="#work" 
          onClick={(e) => handleNavClick(e, '#work')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Work
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Contact
        </a>
        <a 
          href="/Aadvait-Hirde-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}

