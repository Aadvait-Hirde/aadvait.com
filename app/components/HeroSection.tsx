'use client';

import Image from 'next/image';

interface HeroSectionProps {
  onScrollToWork: () => void;
}

export default function HeroSection({ onScrollToWork }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Orange */}
      <div className="relative w-full lg:w-[60%] bg-[#ff6b35] flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-24 lg:py-0">
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Mobile/Tablet Image - Shows only below lg breakpoint */}
            <div className="lg:hidden mb-12 flex justify-center">
              <div className="relative">
                {/* Decorative Dots Pattern - Top Left Behind Frame - 15x15 grid */}
                <div className="absolute -top-8 -left-8 z-0">
                  <div className="grid grid-cols-15 gap-2">
                    {Array.from({ length: 225 }).map((_, i) => (
                      <div key={`mobile-top-${i}`} className="w-0.5 h-0.5 bg-black/20 rounded-full" />
                    ))}
                  </div>
                </div>

                {/* Decorative Dots Pattern - Bottom Right Behind Frame - 15x15 grid */}
                <div className="absolute -bottom-8 -right-8 z-0">
                  <div className="grid grid-cols-15 gap-2">
                    {Array.from({ length: 225 }).map((_, i) => (
                      <div key={`mobile-bottom-${i}`} className="w-0.5 h-0.5 bg-black/20 rounded-full" />
                    ))}
                  </div>
                </div>
                
                {/* Profile Image - Mobile */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 overflow-hidden shadow-xl z-10">
                  <Image 
                    src="/aadvait-sf.png" 
                    alt="Aadvait Profile" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Border Frame - Bottom Right Position */}
                <div className="absolute right-3 bottom-3 w-64 h-64 sm:w-72 sm:h-72 border border-black/30 z-0" />
              </div>
            </div>

            {/* Text Content */}
            <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-left">
              Full-stack
              <br />
              Developer.
            </h1>
            
            <p className="text-black/90 text-lg md:text-xl mb-12 text-left">
              I like to craft solid and scalable frontend products
              with great user experiences.
            </p>

            {/* Feature Points */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="flex-1">
                <p className="text-black/80 text-sm md:text-base text-left">
                  Highly skilled at progressive enhancement, design systems & UI Engineering.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-black/80 text-sm md:text-base text-left">
                  Proven experience building successful products for clients across several countries.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-left">
              <button 
                onClick={onScrollToWork}
                className="inline-block bg-black text-white px-8 py-4 font-semibold hover:bg-black/80 transition-colors cursor-pointer"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Zigzag - Right Side near image */}
        <div className="absolute bottom-32 right-24 hidden lg:block">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="opacity-40">
            <path d="M0 30 L20 10 L40 30 L60 10 L80 30 L100 10" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Right Side - Black - Desktop Only */}
      <div className="hidden lg:flex lg:w-[40%] bg-black relative overflow-hidden">
        {/* Image Container with Border - Bigger */}
        <div className="flex items-center justify-center w-full px-12 z-10">
          <div className="relative">
            {/* Decorative Dots Pattern - Top Left Behind Frame - 15x15 grid */}
            <div className="absolute -top-16 -left-16 z-0">
              <div className="grid grid-cols-15 gap-2">
                {Array.from({ length: 225 }).map((_, i) => (
                  <div key={`top-${i}`} className="w-0.5 h-0.5 bg-orange-500/30 rounded-full" />
                ))}
              </div>
            </div>

            {/* Decorative Dots Pattern - Bottom Right Behind Frame - 15x15 grid */}
            <div className="absolute -bottom-16 -right-16 z-0">
              <div className="grid grid-cols-15 gap-2">
                {Array.from({ length: 225 }).map((_, i) => (
                  <div key={`bottom-${i}`} className="w-0.5 h-0.5 bg-orange-500/30 rounded-full" />
                ))}
              </div>
            </div>
            
            {/* Profile Image - Desktop - Much Bigger */}
            <div className="relative w-96 h-96 xl:w-[28rem] xl:h-[28rem] overflow-hidden shadow-xl z-10">
              <Image 
                src="/aadvait-sf.png" 
                alt="Aadvait Profile" 
                width={448}
                height={448}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Border Frame - Bottom Right Position */}
            <div className="absolute right-6 bottom-6 w-96 h-96 xl:w-[28rem] xl:h-[28rem] border border-orange-500 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

