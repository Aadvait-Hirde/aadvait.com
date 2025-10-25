'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

export default function TechStackMarquee() {
  const techLogos = [
    '/logos/react.png',
    '/logos/typescript.png',
    '/logos/python.png',
    '/logos/tailwind.png',
    '/logos/aws.png',
    '/logos/postgres.png',
    '/logos/prisma.png',
    '/logos/supabase.png',
    '/logos/convex.png',
    '/logos/clerk.png',
    '/logos/nextjs.png',
    '/logos/pytorch.png',
    '/logos/tensorflow.png',
    '/logos/polar.png',
  ];

  return (
    <div className="relative w-full mt-8 overflow-hidden py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#e8cca1] to-transparent z-10 pointer-events-none" />
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#e8cca1] to-transparent z-10 pointer-events-none" />
      
      <Marquee className="[--duration:40s]">
        {techLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6"
          >
            <Image 
              src={logo} 
              alt={`Technology ${index + 1}`}
              width={60}
              height={60}
              className="h-12 w-auto object-contain hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

