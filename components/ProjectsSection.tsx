'use client';

import ProjectCard from './ProjectCard';
import { Github, Newspaper, FileText, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Locus Project",
      technologies: ["Unity", "C#", "AR Foundation", "ARKit/ARCore", "Depth APIs", "Scene Management"],
      achievements: [
        "Built in Unity using C#, AR Foundation, and ARKit/ARCore for real-time indoor navigation with <1m accuracy",
        "Designed a 3D campus model with QR-based tracking and mapped over 200+ classrooms to unique navigation targets",
        "Developed dynamic UI, path visualization with line rendering, and latency-optimized interactions",
        "Deployed custom builds for multiple schools, adapting the architecture for different facilities",
        "Featured in Khaleej Times, Gulf News, and The National for innovation in educational tech"
      ],
      image: "/images/projects/locus-project.png",
      links: [
        { label: "GitHub", url: "https://github.com/Aadvait-Hirde/Locus", icon: Github },
        { label: "Khaleej Times", url: "https://www.khaleejtimes.com/life-and-living/schooling-in-uae/dubai-khda-school-inspections-go-high-tech-thanks-to-apps-built-by-students", icon: Newspaper },
        { label: "Edarabia", url: "https://www.edarabia.com/dubai-khda-school-inspections-go-high-tech-thanks-apps-built-students/", icon: Newspaper }
      ]
    },
    {
      title: "KTP Indiana Website & Member Portal",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Clerk", "Radix UI", "Vercel", "GitHub API"],
      achievements: [
        "Replaced the Framer prototype with a scalable production website using Next.js 15, TypeScript, and Tailwind CSS",
        "Built a full Clerk + Supabase role-based access control system with 5 hierarchical user types",
        "Developed a real-time internships board syncing 500+ listings/day from GitHub with cron jobs, caching, and Markdown parsing",
        "Created a full member portal: announcements, GCal sync, merch store, alumni directory, and dues payment system",
        "Designed a responsive UI using Radix UI primitives, infinite scroll carousels, and custom animation logic for smooth UX"
      ],
      image: "/images/projects/ktp-indiana.png",
      links: [
        { label: "GitHub", url: "https://github.com/Aadvait-Hirde/KTP-Indiana", icon: Github },
        { label: "Live Site", url: "https://ktpiu.com/", icon: ExternalLink }
      ]
    },
    {
      title: "MNIST & CIFAR Real-Time Image Classification Systems",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
      achievements: [
        "Implemented CNNs with dropout and regularization to optimize classification accuracy",
        "Built OpenCV-based real-time interfaces for live object and digit recognition via webcam",
        "Achieved 91% MNIST and 90.3% CIFAR-10 accuracy using TensorFlow and Keras pipelines",
        "Integrated data augmentation, Gaussian blurring, and thresholding to enhance model generalization",
        "Visualized performance using confusion matrices, ROC and precision-recall curves, and confidence plots"
      ],
      image: "/images/projects/cifar.png",
      links: [
        { label: "MNIST", url: "https://github.com/Aadvait-Hirde/MNIST-Digit-Classification", icon: Github },
        { label: "CIFAR", url: "https://github.com/Aadvait-Hirde/CIFAR-10-Image-Classification", icon: Github }
      ]
    },
    {
      title: "aadvait.com Portfolio Website",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Formspark", "Vercel"],
      achievements: [
        "Designed and developed a fully responsive, mobile-first portfolio with custom animations and scroll-triggered interactions using Framer Motion",
        "Implemented a modular component architecture with reusable cards for Work, Research, Experience, and Projects sections, ensuring maintainability and scalability",
        "Integrated dynamic routing and SEO optimization with Next.js metadata API, Open Graph tags, and structured data for enhanced discoverability",
        "Built custom UI components including an animated tech stack marquee, sticky navigation with scroll indicators, and a full-screen hamburger menu with smooth transitions",
        "Configured a serverless contact form with Formspark integration, custom success notifications, and client-side validation for seamless user engagement",
        "Deployed on Vercel with automatic CI/CD, environment-based configurations, and optimized build performance for sub-second page loads"
      ],
      image: "/images/projects/aadvait-com.png",
      links: [
        { label: "GitHub", url: "https://github.com/Aadvait-Hirde/aadvait.com", icon: Github }
      ]
    },
    {
      title: "ThirdLayer - Semantic Google Drive Search",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Drive API", "Transformers.js", "OpenAI GPT-4", "Radix UI", "Vercel"],
      achievements: [
        "Built a full-stack Next.js application with Google Drive OAuth integration and real-time file indexing across 1000+ files",
        "Implemented semantic search using Transformers.js and Xenova embeddings with cosine similarity ranking for intelligent content discovery",
        "Developed a multi-format content extraction pipeline supporting PDFs, Word docs, spreadsheets, and presentations using pdf-parse and mammoth",
        "Created a ChatGPT-style conversational interface with streaming responses powered by OpenAI GPT-4, combining semantic search with LLM reasoning",
        "Designed an intuitive folder browser with recursive Drive navigation, real-time progress tracking, and batch indexing capabilities",
        "Built vector search service with in-memory storage, metadata filtering, and BM25 hybrid ranking for production-grade retrieval"
      ],
      image: "/images/projects/thirdlayer.png",
      links: [
        { label: "GitHub", url: "https://github.com/Aadvait-Hirde/thirdlayer", icon: Github }
      ]
    },
    {
      title: "Nodebase",
      technologies: ["Next.js 15", "TypeScript", "React Flow", "Prisma ORM", "Neon Postgres", "tRPC", "Inngest", "Polar", "Better Auth", "Sentry", "CodeRabbit", "Tailwind CSS", "Radix UI"],
      achievements: [
        "Built an interactive visual workflow builder using React Flow, featuring drag-and-drop nodes, zooming, keyboard shortcuts, and live data previews",
        "Integrated multiple trigger nodes (Webhook, Stripe, Google Form, Manual) and AI providers (OpenAI, Claude, Gemini) with pluggable APIs for easy extension",
        "Implemented background job execution with Inngest, handling async workflows and queued actions with real-time monitoring",
        "Added Better Auth authentication, Polar subscriptions & paywalls, and a full SaaS business layer with RBAC and billing management",
        "Used Prisma ORM with Neon Postgres for scalable data persistence and schema migrations",
        "Integrated Sentry for error tracking and AI-powered anomaly detection, plus CodeRabbit for automated PR reviews and workflow audits",
        "Styled with Tailwind CSS and Radix UI, supporting dark mode, responsive layout, and theming built on Next.js 15's App Router architecture"
      ],
      image: "/images/projects/nodebase.png",
      links: [
        { label: "GitHub", url: "https://github.com/Aadvait-Hirde/nodebase", icon: Github }
      ]
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

