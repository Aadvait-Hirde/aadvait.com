'use client';

import Image from 'next/image';

interface HeroSectionProps {
  onScrollToWork: () => void;
}

export default function HeroSection({ onScrollToWork }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Beige - Wider */}
      <div className="relative w-full lg:w-[70%] bg-[#e8cca1] flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-40 py-24 lg:py-0">
          <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-12">
            {/* Mobile/Tablet Image - Shows only below lg breakpoint */}
            <div className="lg:hidden mb-12 flex justify-center">
              <div className="relative">
                {/* Decorative Dots Pattern - Top Left Behind Frame - 15x15 grid */}
                <div className="absolute -top-8 -left-8 z-0">
                  <div className="grid grid-cols-15 gap-2">
                    {Array.from({ length: 225 }).map((_, i) => (
                      <div key={`mobile-top-${i}`} className="w-0.5 h-0.5 bg-[#3f031c]/20 rounded-full" />
                    ))}
                  </div>
                </div>

                {/* Decorative Dots Pattern - Bottom Right Behind Frame - 15x15 grid */}
                <div className="absolute -bottom-8 -right-8 z-0">
                  <div className="grid grid-cols-15 gap-2">
                    {Array.from({ length: 225 }).map((_, i) => (
                      <div key={`mobile-bottom-${i}`} className="w-0.5 h-0.5 bg-[#3f031c]/20 rounded-full" />
                    ))}
                  </div>
                </div>
                
                {/* Profile Image - Mobile */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 overflow-hidden shadow-xl z-10">
                  <Image 
                    src="/aadvait-hero.png" 
                    alt="Aadvait Profile" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Border Frame - Bottom Right Position - White */}
                <div className="absolute right-3 bottom-3 w-64 h-64 sm:w-72 sm:h-72 border-2 border-white z-0" />
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

        {/* E-signature - Bottom Right */}
        <div className="absolute bottom-35 right-15 hidden lg:block opacity-100">
          <Image 
            src="/aadvait-esign.png" 
            alt="Aadvait Signature" 
            width={100}
            height={50}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Right Side - Dark Burgundy - Narrower - Desktop Only */}
      <div className="hidden lg:block lg:w-[30%] bg-[#3f031c] relative overflow-hidden">
      </div>

      {/* Image Container - Centered on Split - Desktop Only */}
      <div className="hidden lg:flex absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Decorative Dots Pattern - Top Left Behind Frame - Burgundy - 15x15 grid */}
          <div className="absolute -top-16 -left-16 z-0">
            <div className="grid grid-cols-15 gap-2">
              {Array.from({ length: 225 }).map((_, i) => (
                <div key={`top-${i}`} className="w-0.5 h-0.5 bg-[#3f031c]/30 rounded-full" />
              ))}
            </div>
          </div>

          {/* Decorative Dots Pattern - Bottom Right Behind Frame - Beige - 15x15 grid */}
          <div className="absolute -bottom-16 -right-16 z-0">
            <div className="grid grid-cols-15 gap-2">
              {Array.from({ length: 225 }).map((_, i) => (
                <div key={`bottom-${i}`} className="w-0.5 h-0.5 bg-[#e8cca1]/30 rounded-full" />
              ))}
            </div>
          </div>
          
          {/* Profile Image - Desktop - Much Bigger */}
          <div className="relative w-96 h-96 xl:w-[28rem] xl:h-[28rem] overflow-hidden shadow-2xl z-10">
            <Image 
              src="/aadvait-hero.png" 
              alt="Aadvait Profile" 
              width={448}
              height={448}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Border Frame - Bottom Right Position - White */}
          <div className="absolute right-6 bottom-6 w-96 h-96 xl:w-[28rem] xl:h-[28rem] border-2 border-white z-0" />
        </div>
      </div>
    </section>
  );
}

