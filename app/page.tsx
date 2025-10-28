'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ResearchSection from '@/components/ResearchSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NavigationMenu from '@/components/NavigationMenu';
import HamburgerMenu from '@/components/HamburgerMenu';
import ScrollIndicator from '@/components/ScrollIndicator';
import Logo from '@/components/Logo';
import SocialBar from '@/components/SocialBar';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const totalSections = 7; // Hero, About, Work, Research, Experience, Projects, Contact

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if scrolled past first section
      setIsScrolled(scrollPosition > windowHeight * 0.8);
      
      // Get all section elements
      const sections = ['hero', 'about', 'work', 'research', 'experience', 'projects', 'contact'];
      let currentSection = 0;
      
      // Find which section is currently in view
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section top is in the upper half of viewport, it's active
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = index;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = ['hero', 'about', 'work', 'research', 'experience', 'projects', 'contact'];
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
        isOpen={isMenuOpen}
      />
      
      <ScrollIndicator
        activeSection={activeSection}
        totalSections={totalSections}
        onSectionClick={scrollToSection}
      />

      <SocialBar />

      {/* Page Sections */}
      <HeroSection onScrollToWork={() => scrollToSection(2)} />
      <AboutSection />
      <WorkSection />
      <ResearchSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
