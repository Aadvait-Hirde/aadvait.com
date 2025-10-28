'use client';

import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Locus Project",
      technologies: [],
      achievements: [],
      image: "/project-placeholder.jpg",
      links: []
    },
    {
      title: "KTP Indiana Website",
      technologies: [],
      achievements: [],
      image: "/project-placeholder.jpg",
      links: []
    },
    {
      title: "MNIST & CIFAR Classification Projects",
      technologies: [],
      achievements: [],
      image: "/project-placeholder.jpg",
      links: []
    },
    {
      title: "aadvait.com Portfolio Website",
      technologies: [],
      achievements: [],
      image: "/project-placeholder.jpg",
      links: []
    },
    {
      title: "Thirdlayer.inc Drive",
      technologies: [],
      achievements: [],
      image: "/project-placeholder.jpg",
      links: []
    },
    {
      title: "Nodebase",
      technologies: [],
      achievements: [],
      image: "/project-placeholder.jpg",
      links: []
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-white py-20 px-8 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <svg className="absolute bottom-20 right-10 hidden lg:block opacity-30" width="120" height="180" viewBox="0 0 120 180">
        <path 
          fill="none" 
          stroke="#e8cca1" 
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M0 0v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26"
        />
      </svg>

      <div className="absolute top-20 left-20 hidden lg:block opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dot-${i}`} className="w-1 h-1 bg-[#3f031c] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-[#3f031c] mb-16 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

