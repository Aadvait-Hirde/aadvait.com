export const workExperiences = [
  {
    company: "Oracle",
    position: "Software Development Intern - Oracle Cloud Infrastructure (OCI) Team",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Dubai, UAE",
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
    description: [
      "Enhanced recommendation engine using PyTorch and collaborative filtering for IBM Watson pilot with MAF (Carrefour), processing 80K+ loyalty user transactions.",
      "Built ETL pipelines with Apache Spark, Pandas to process 3TB+ retail datasets, reducing preprocessing time by 30% through data optimization and feature extraction.",
      "Conducted model evaluation using scikit-learn metrics (precision, recall, ROC-AUC), contributing to 12% accuracy improvement over baseline rule-based system.",
      "Fine-tuned BERT models with Transformers for Arabic-English sentiment analysis on telecom customer tickets, achieving 93% production classification accuracy.",
      "Deployed ML models via Flask REST APIs on IBM Cloud Foundry with Redis caching, creating documentation for internal teams to integrate inference endpoints."
    ]
  },
];

export const experienceRoles = [
  {
    company: "Kappa Theta Pi — Alpha Eta",
    position: "Founder & President",
    startDate: "Feb 2025",
    endDate: "Present",
    location: "Bloomington, IN",
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
    description: [
      "Managed a 10-member technical team through the planning and development of a custom, local LLaMA chatbot and client-facing support platform",
      "Designed and prototyped the frontend experience using Framer, focusing on clean UI and intuitive interaction flows",
      "Collaborated with developers to integrate the platform with Zoho CRM via API, enabling lead tracking and user data management",
      "Coordinated task delegation, timelines, and weekly standups to ensure consistent progress across frontend, backend, and automation subteams",
      "Worked closely with the client (TrueLeap) to align on feature requirements and deliver iterative updates throughout the development cycle"
    ]
  },
];

export const currentRoles = [
  {
    company: "Antryb",
    position: "Founder & CEO",
    description: "Building a high-performance email + calendar client that unifies Gmail and Outlook with AI-powered triage. Shipped MVP in 2 weeks, currently in private beta."
  },
];

export const researchProjects = [
  {
    title: "Benchmarking LLM-Generated Code Security via Static Analysis and CWE Scanning",
    duration: "Aug 2025 - Present",
    description: "Investigating how LLMs introduce security vulnerabilities into AI-generated code. The study benchmarks insecure coding patterns across programming languages, IDEs, and prompt types using static analysis tools such as Semgrep, CodeQL, and Bandit, mapped to CWE/CVSS/OWASP standards.",
    links: [
      { label: "Presentation", url: "/documents/DSAIL.pdf" }
    ]
  },
  {
    title: "Using Transformers and DL with Stance Detection to Forecast Crypto Price Movement",
    duration: "May 2022 - Dec 2022",
    description: "Developed a stance-detection-based forecasting system that predicted Bitcoin price movements by combining transformer-based NLP and deep learning time-series models. Achieved 80% stance-detection accuracy and a mean absolute error of $1,144 on price prediction.",
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/9953018" },
      { label: "PDF", url: "/documents/Paper-1.pdf" }
    ]
  },
];

export const projects = [
  {
    title: "Locus Project",
    description: "Built in Unity using C#, AR Foundation, and ARKit/ARCore for real-time indoor navigation with <1m accuracy. Designed a 3D campus model with QR-based tracking and mapped over 200+ classrooms.",
    links: [
      { label: "GitHub", url: "https://github.com/Aadvait-Hirde/Locus" }
    ]
  },
  {
    title: "KTP Indiana Website & Member Portal",
    description: "Replaced the Framer prototype with a scalable production website using Next.js 15, TypeScript, and Tailwind CSS. Built a full Clerk + Supabase role-based access control system with 5 hierarchical user types.",
    links: [
      { label: "GitHub", url: "https://github.com/Aadvait-Hirde/KTP-Indiana" },
      { label: "Live Site", url: "https://ktpiu.com/" }
    ]
  },
  {
    title: "ThirdLayer - Semantic Google Drive Search",
    description: "Built a full-stack Next.js application with Google Drive OAuth integration and real-time file indexing across 1000+ files. Implemented semantic search using Transformers.js and Xenova embeddings.",
    links: [
      { label: "GitHub", url: "https://github.com/Aadvait-Hirde/thirdlayer" }
    ]
  },
  {
    title: "Nodebase",
    description: "Built an interactive visual workflow builder using React Flow, featuring drag-and-drop nodes, zooming, keyboard shortcuts, and live data previews. Integrated multiple trigger nodes and AI providers.",
    links: [
      { label: "GitHub", url: "https://github.com/Aadvait-Hirde/nodebase" }
    ]
  },
];

