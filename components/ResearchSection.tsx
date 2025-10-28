'use client';

import ResearchCard from './ResearchCard';

export default function ResearchSection() {
  const researchProjects = [
    {
      title: "AI-Enabled Vulnerability Management in Open Source Ecosystems",
      description: "Contributing to the NSF SAFE-OSE project at Indiana University's Data Science and Artificial Intelligence Lab (DSAIL), benchmarking vulnerabilities produced by LLMs across IDEs, programming languages, and prompt variations.",
      duration: "Aug 2024 - Present",
      technologies: ["Python", "PyTorch", "Transformers", "LLMs", "CWE", "Security Analysis"],
      achievements: [
        "Mapping CWE patterns to understand security risks of AI-generated code",
        "Benchmarking vulnerabilities across multiple IDEs and programming languages",
        "Analyzing prompt variations and their impact on code security"
      ],
      image: "/research-placeholder.jpg",
      links: {
        github: "https://github.com/yourusername/project",
        paper: "#",
      }
    },
    {
      title: "Using Transformers and Deep Learning with Stance Detection to Forecast Cryptocurrency Price Movement",
      description: "Developed a stance-detection-based forecasting system that predicted Bitcoin price movements by combining transformer-based NLP and deep learning time-series models. Built a RoBERTa model to detect bullish vs. bearish market stances from cryptocurrency-related tweets and linked that sentiment to real-world price data through a Recurrent Neural Network. The pipeline achieved 80% stance-detection accuracy and a mean absolute error of $1,144 on price prediction — demonstrating the feasibility of using social media trends for crypto forecasting.",
      duration: "May 2022 - Dec 2022",
      technologies: ["Python", "PyTorch", "HuggingFace Transformers", "RoBERTa", "RNN / LSTM", "yFinance", "Sklearn", "Pandas"],
      achievements: [
        "Fine-tuned a transformer (RoBERTa) for stance detection on 2.5K hand-labeled tweets, achieving 80% accuracy",
        "Designed and trained an RNN to map stance data to Bitcoin closing prices with $1.1K MAE",
        "Integrated transformer outputs with time-series forecasting to bridge NLP and financial prediction",
        "Published in IEEE (2022) and presented findings at BLAST AI Symposium"
      ],
      image: "/Paper-1.png",
      links: {
        paper: "https://ieeexplore.ieee.org/document/9953018",
        article: "/Paper-1.pdf",
      }
    },
  ];

  return (
    <section id="research" className="relative min-h-screen bg-[#f5f5f5] py-20 px-8 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <svg className="absolute top-20 right-10 hidden lg:block" width="120" height="180" viewBox="0 0 120 180">
        <path 
          fill="none" 
          stroke="#e8cca1" 
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M0 0v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26"
        />
      </svg>

      <div className="absolute bottom-10 left-20 hidden lg:block opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dot-${i}`} className="w-1 h-1 bg-[#3f031c] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-[#3f031c] mb-16 text-center">
          Research
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <ResearchCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

