'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden py-20 px-8 md:px-12">
      {/* Decorative stepped lines - top left */}
      <svg className="absolute top-20 left-10 hidden lg:block" width="120" height="180" viewBox="0 0 120 180">
        <path 
          fill="none" 
          stroke="#e8cca1" 
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M0 0v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26"
        />
      </svg>

      {/* Decorative zigzag lines - bottom right */}
      <svg className="absolute bottom-20 right-10 hidden lg:block" width="180" height="60" viewBox="0 0 180 60">
        <path 
          fill="none" 
          stroke="#3f031c"
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M0 30l15.343 16.136 15.343-16.136 15.341 16.136 15.343-16.136 15.343 16.136 15.343-16.136 15.344 16.136 15.345-16.136"
        />
      </svg>

      {/* Decorative dots grid - top right */}
      <div className="absolute top-10 right-20 hidden lg:block opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dot-tr-${i}`} className="w-1 h-1 bg-[#3f031c] rounded-full" />
          ))}
        </div>
      </div>

      {/* Decorative dots grid - bottom left */}
      <div className="absolute bottom-10 left-20 hidden lg:block opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dot-bl-${i}`} className="w-1 h-1 bg-[#e8cca1] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Collage Image */}
          <div className="relative flex justify-center lg:justify-start lg:-ml-12">
            <div className="relative">
              {/* Collage Image */}
              <div className="relative w-full max-w-lg">
                <Image 
                  src="/aadvait-collage.png" 
                  alt="Aadvait Collage" 
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative dots pattern near image */}
              <div className="absolute -top-8 -left-8 z-0">
                <div className="grid grid-cols-10 gap-1.5">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={`dot-img-${i}`} className="w-0.5 h-0.5 bg-[#e8cca1] rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 lg:-ml-16 lg:pr-8">
            <h2 className="text-5xl md:text-6xl font-bold text-[#3f031c] mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed tracking-wide text-justify">
              <p>
                Hey, I'm Aadvait! I was born in India, raised in Dubai, and I'm now studying Computer Science and Business at Indiana University, Bloomington. I specialize in full-stack web development using TypeScript, Next.js, tRPC, Prisma, Supabase etc. I've built membership systems, internal dashboards, and end-to-end products integrating authentication, payments, and data pipelines. I've also traveled across the U.S. for hackathons, pitch competitions, and startup conferences, where I learned how to prototype fast, validate ideas, and communicate technical work to both users and investors.
              </p>
              
              <p>
                My main interest lies in the mechanics of building and scaling software businesses: how developer tools and SaaS startups acquire their first customers, close B2B contracts, price their product, and measure performance through metrics like CAC, LTV, retention, and churn. I use YC, ODF, Z-Fellows companies as case studies to learn about early-stage growth strategy, like equity allocation, fundraising structure, onboarding optimization, and how cold outreach and distribution drive adoption.
              </p>
              
              <p>
                Coming to the research side, I work in the Data Science and Artificial Intelligence Lab (DSAIL) at the Kelley School of Business, collaborating with Indiana University's Open Source Ecosystems (OSE) team on the NSF SAFE-OSE project — "Implementing AI-Enabled Vulnerability Management Practices to Enhance Safety and Security of Open Source Cloud Computing Ecosystems." My project contributes to benchmarking vulnerabilities produced by LLMs across IDEs, programming languages, and prompt variations, mapping CWE patterns to understand the security risks of AI-generated code.
              </p>
              
              <p>
                Outside of research and startups, I lead Kappa Theta Pi at IU, the largest professional technology fraternity in the U.S., with 70+ members at IU. I'm also a Luddy Direct Admit, Hutton Honors Scholar, and Global Engagement Scholar supported by over $52,000 in scholarships. When I'm not building or researching, I'm probably playing the guitar, copying a Bob Ross painting, or at a McDonald's.
              </p>
            </div>

            {/* Decorative accent line */}
            <div className="flex items-center gap-4 pt-6">
              <div className="w-20 h-1 bg-[#e8cca1]" />
              <div className="w-10 h-1 bg-[#3f031c]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

