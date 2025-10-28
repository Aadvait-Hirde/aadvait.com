'use client';

import Image from 'next/image';

interface LogoProps {
  isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed top-8 left-8 md:top-12 md:left-12 z-50 transition-all duration-300 hover:opacity-70 active:scale-95 cursor-pointer"
      aria-label="Back to top"
    >
      {isScrolled ? (
        <Image 
          src="/images/hero/a-favicon.png" 
          alt="Aadvait Logo" 
          width={40} 
          height={40}
          className="transition-all duration-300"
        />
      ) : (
        <Image 
          src="/images/hero/aadvait-logo.png" 
          alt="Aadvait" 
          width={120} 
          height={40}
          className="transition-all duration-300"
        />
      )}
    </button>
  );
}

