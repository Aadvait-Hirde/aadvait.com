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
    <div className="w-full mt-8 overflow-hidden">
      <Marquee className="[--duration:40s]">
        {techLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4"
          >
            <Image 
              src={logo} 
              alt={`Technology ${index + 1}`}
              width={40}
              height={40}
              className="h-8 w-auto object-contain hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

