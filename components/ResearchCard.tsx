'use client';

import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface Link {
  label: string;
  url: string;
  icon: LucideIcon;
}

interface ResearchCardProps {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  achievements: string[];
  image: string;
  links?: Link[];
}

export default function ResearchCard({
  title,
  description,
  duration,
  technologies,
  achievements,
  image,
  links = []
}: ResearchCardProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border-t-4 border-[#e8cca1] flex flex-col h-full">
      {/* Image - Top section */}
      <div className="w-full h-80 relative overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Title and Duration - Fixed height section */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-[#3f031c] mb-3 min-h-16">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{duration}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed text-justify">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-500 mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#e8cca1]/20 text-[#3f031c] text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-500 mb-2">Key Achievements</p>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-700 flex">
                  <span className="mr-2 text-[#e8cca1] font-bold">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links - Push to bottom */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 mt-auto border-t border-gray-200">
            {links.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#3f031c] hover:text-[#e8cca1] transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

