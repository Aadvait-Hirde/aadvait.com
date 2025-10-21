'use client';

import Image from 'next/image';

interface LogoProps {
  isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps) {
  return (
    <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50 transition-all duration-300">
      {isScrolled ? (
        <Image 
          src="/a-favicon.png" 
          alt="Aadvait Logo" 
          width={40} 
          height={40}
          className="transition-all duration-300"
        />
      ) : (
        <Image 
          src="/aadvait-logo.png" 
          alt="Aadvait" 
          width={120} 
          height={40}
          className="transition-all duration-300"
        />
      )}
    </div>
  );
}

