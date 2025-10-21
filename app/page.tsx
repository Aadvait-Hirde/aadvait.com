'use client';

import { useState, useEffect } from 'react';
import {
  HeroSection,
  AboutSection,
  WorkSection,
  ContactSection,
  NavigationMenu,
  HamburgerMenu,
  ScrollIndicator,
  Logo
} from './components';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const totalSections = 4; // Hero, About, Work, Contact

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if scrolled past first section
      setIsScrolled(scrollPosition > windowHeight * 0.8);
      
      // Calculate active section based on scroll position + half viewport
      const sectionIndex = Math.round(scrollPosition / windowHeight);
      setActiveSection(Math.min(sectionIndex, totalSections - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Components */}
      <Logo isScrolled={isScrolled} />
      
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
      
      <HamburgerMenu 
        onClick={() => setIsMenuOpen(true)} 
      />
      
      <ScrollIndicator
        activeSection={activeSection}
        totalSections={totalSections}
        onSectionClick={scrollToSection}
      />

      {/* Page Sections */}
      <HeroSection onScrollToWork={() => scrollToSection(2)} />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
