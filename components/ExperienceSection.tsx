'use client';

import WorkExperience from './WorkExperience';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Kappa Theta Pi — Alpha Eta",
      position: "Founder & President",
      startDate: "Feb 2025",
      endDate: "Present",
      location: "Bloomington, IN",
      logo: "/ktp-logo.png",
      description: [
        "Founded and scaled the Indiana University chapter of Kappa Theta Pi, the nation's premier professional technology fraternity, leading 14 executive board members and 73 active members across technical and business disciplines",
        "Built an integrated recruitment system using Airtable, n8n, and Zapier automations, processing 200+ applicants per semester and centralizing evaluation, attendance, and decision workflows",
        "Oversaw all executive operations from governance and bylaws to brand design, mentorship systems, and long-term strategic planning for future pledge classes. Includes internal operations such as rush, budgeting, marketing, sponsorships, curriculum etc",
        "Onboarded Humana Insurance as a Silver Corporate Partner, establishing recurring sponsorship and professional development opportunities for members",
        "Organized cross-campus case competitions, startup panels, and technical workshops with Luddy and Kelley organizations, positioning KTP as a central tech-leadership hub on campus"
      ]
    },
    {
      company: "Luddy Consulting Association",
      position: "Project Manager: Solutions Engineering Team",
      startDate: "Feb 2025",
      endDate: "Sep 2025",
      location: "Bloomington, IN",
      logo: "/lca-logo.jpg",
      description: [
        "Managed a 10-member technical team through the planning and development of a custom, local LLaMA chatbot and client-facing support platform",
        "Designed and prototyped the frontend experience using Framer, focusing on clean UI and intuitive interaction flows",
        "Collaborated with developers to integrate the platform with Zoho CRM via API, enabling lead tracking and user data management",
        "Coordinated task delegation, timelines, and weekly standups to ensure consistent progress across frontend, backend, and automation subteams",
        "Worked closely with the client (TrueLeap) to align on feature requirements and deliver iterative updates throughout the development cycle"
      ]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-[#f5f5f5] py-20 px-8 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <svg className="absolute top-20 left-10 hidden lg:block opacity-30" width="120" height="180" viewBox="0 0 120 180">
        <path 
          fill="none" 
          stroke="#e8cca1" 
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M0 0v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26"
        />
      </svg>

      <div className="absolute bottom-10 right-20 hidden lg:block opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dot-${i}`} className="w-1 h-1 bg-[#3f031c] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-[#3f031c] mb-16 text-center">
          Experience
        </h2>
        
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <WorkExperience
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

