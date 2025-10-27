'use client';

import WorkExperience from './WorkExperience';

export default function WorkSection() {
  const workExperiences = [
    {
      company: "Oracle",
      position: "Software Development Intern - Oracle Cloud Infrastructure (OCI) Team",
      startDate: "May 2024",
      endDate: "Aug 2024",
      location: "Dubai, UAE",
      logo: "/logos/oracle.png",
      description: [
        "Built cloud management portal with Next.js, TypeScript, and Oracle APEX, implementing real-time monitoring dashboards for clients like Emirates NBD and Etisalat.",
        "Enhanced microservices reliability by implementing RabbitMQ message queuing, supporting 99.9% uptime SLA for Oracle Cloud's UAE deployment.",
        "Integrated OAuth 2.0 with Oracle IDCS APIs and NextAuth.js v4.22, implementing RBAC for multi-tenant applications serving Dubai government entities.",
        "Developed Stripe payment gateway integrations for Oracle NetSuite clients with webhooks and fraud detection, ensuring compliance for e-commerce implementations.",
        "Automated infrastructure provisioning using Terraform and OCI CLI for dev/staging environments, accelerating the team's infrastructure-as-code migration."
      ]
    },
    {
      company: "IBM",
      position: "Data & AI Intern - Watson & Cloud Pak Team",
      startDate: "May 2023",
      endDate: "Aug 2023",
      location: "Dubai, UAE",
      logo: "/logos/ibm.png",
      description: [
        "Enhanced recommendation engine using PyTorch and collaborative filtering for IBM Watson pilot with MAF (Carrefour), processing 80K+ loyalty user transactions.",
        "Built ETL pipelines with Apache Spark, Pandas to process 3TB+ retail datasets, reducing preprocessing time by 30% through data optimization and feature extraction.",
        "Conducted model evaluation using scikit-learn metrics (precision, recall, ROC-AUC), contributing to 12% accuracy improvement over baseline rule-based system.",
        "Fine-tuned BERT models with Transformers for Arabic-English sentiment analysis on telecom customer tickets, achieving 93% production classification accuracy.",
        "Deployed ML models via Flask REST APIs on IBM Cloud Foundry with Redis caching, creating documentation for internal teams to integrate inference endpoints."
      ]
    }
  ];

  return (
    <section id="work" className="relative min-h-screen bg-white py-20 px-8 md:px-12 overflow-hidden">
      {/* Decorative zigzag lines - top left */}
      <svg className="absolute top-20 left-10 hidden lg:block" width="180" height="60" viewBox="0 0 180 60">
        <path 
          fill="none" 
          stroke="#e8cca1" 
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

      {/* Decorative stepped lines - bottom right */}
      <svg className="absolute bottom-20 right-10 hidden lg:block" width="120" height="180" viewBox="0 0 120 180">
        <path 
          fill="none" 
          stroke="#3f031c" 
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M120 180v-22.26h-22.26v-22.26h-22.26v-22.26h-22.26v-22.26h-22.26v-22.26h-22.26"
        />
      </svg>

      {/* Decorative dots grid - bottom left */}
      <div className="absolute bottom-10 left-20 hidden lg:block opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dot-bl-${i}`} className="w-1 h-1 bg-[#e8cca1] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-[#3f031c] mb-16 text-center">
          Work Experience
        </h2>

        <div className="space-y-0">
          {workExperiences.map((exp, index) => (
            <WorkExperience
              key={index}
              {...exp}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

