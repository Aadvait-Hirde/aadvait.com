'use client';

import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface Link {
  label: string;
  url: string;
  icon: LucideIcon;
}

interface ProjectCardProps {
  title: string;
  technologies: string[];
  achievements: string[];
  image: string;
  links?: Link[];
}

export default function ProjectCard({
  title,
  technologies,
  achievements,
  image,
  links = []
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border-t-4 border-[#e8cca1] flex flex-col h-full">
      {/* Image - Top section */}
      <div className="w-full h-56 relative overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#3f031c] mb-4">
          {title}
        </h3>

        {/* Key Achievements */}
        {achievements.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-500 mb-2">Key Achievements</p>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-700 flex text-justify">
                  <span className="mr-2 text-[#e8cca1] font-bold">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

