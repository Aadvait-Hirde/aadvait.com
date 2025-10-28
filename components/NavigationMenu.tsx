'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const socials = [
    { name: 'GitHub', icon: '/icons/github.svg', url: 'https://github.com/Aadvait-Hirde' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://linkedin.com/in/aadvait-hirde' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: 'https://twitter.com/aadvaitn' },
    { name: 'Email', icon: '/icons/mail.svg', url: 'mailto:aadvait.cr@gmail.com' },
  ];

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
    <div className={`fixed inset-0 bg-[#3f031c]/95 z-50 flex flex-col items-center justify-center transition-opacity duration-150 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
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
          href="#research" 
          onClick={(e) => handleNavClick(e, '#research')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Research
        </a>
        <a 
          href="#experience" 
          onClick={(e) => handleNavClick(e, '#experience')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, '#projects')} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-[#e8cca1] hover:scale-110 transition-all duration-300"
        >
          Projects
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

      {/* Social Icons - Bottom Center */}
      <div className={`absolute bottom-12 flex gap-6 transition-all duration-200 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label={social.name}
          >
            <Image 
              src={social.icon} 
              alt={social.name}
              width={24}
              height={24}
              className="w-6 h-6 invert"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

