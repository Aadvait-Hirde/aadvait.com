'use client';

import Image from 'next/image';

interface WorkExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  logo: string;
  description: string[];
  isLast?: boolean;
}

export default function WorkExperience({
  company,
  position,
  startDate,
  endDate,
  location,
  logo,
  description,
  isLast = false
}: WorkExperienceProps) {
  return (
    <div className="relative flex gap-4 md:gap-8 group">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        {/* Circle indicator */}
        <div className="w-3 h-3 bg-[#e8cca1] rounded-full border-2 border-[#3f031c] z-10" />
        
        {/* Vertical line */}
        {!isLast && <div className="w-0.5 flex-1 bg-gradient-to-b from-[#3f031c]/40 to-[#3f031c]/10 min-h-[200px]" />}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-8 md:pb-16">
        <div className="bg-white p-4 md:p-8 shadow-md hover:shadow-xl border-l-4 border-[#e8cca1] transition-all duration-300 hover:translate-x-1">
          {/* Header with logo and company info */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
            {/* Left side: Logo and company/position */}
            <div className="flex items-start gap-3 md:gap-6 flex-1 min-w-0">
              {/* Company Logo */}
              <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={64}
                  height={64}
                  className="object-contain max-h-full max-w-full"
                />
              </div>

              {/* Company and position info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-[#3f031c] mb-1 md:mb-2">
                  {company}
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-700 break-words">
                  {position}
                </p>
              </div>
            </div>

            {/* Right side: Date and location */}
            <div className="flex flex-col md:items-end gap-2 text-xs md:text-sm text-gray-600 flex-shrink-0">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="whitespace-nowrap">{startDate} - {endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Description bullets */}
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-gray-700 text-sm leading-relaxed flex">
                <span className="mr-3 text-[#e8cca1] font-bold flex-shrink-0">・</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

