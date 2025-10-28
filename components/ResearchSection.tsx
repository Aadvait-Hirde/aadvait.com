'use client';

import ResearchCard from './ResearchCard';
import { Presentation, FileText, BookOpen, Quote } from 'lucide-react';

export default function ResearchSection() {
  const researchProjects = [
    {
      title: "Benchmarking LLM-Generated Code Security via Static Analysis and CWE Scanning",
      description: "As part of IU's Data Science and Artificial Intelligence Lab and the Safe Open Source Ecosystems initiative funded by the National Science Foundation, this project investigates how LLMs introduce security vulnerabilities into AI-generated code. The study benchmarks insecure coding patterns across programming languages, IDEs, and prompt types using static analysis tools such as Semgrep, CodeQL, and Bandit, mapped to CWE/CVSS/OWASP standards. The goal is to establish a quantitative baseline for LLM-generated code security and identify the behavioral and architectural factors that propagate vulnerabilities across modern development environments.",
      duration: "Aug 2025 - Present",
      technologies: ["Python", "Semgrep", "CodeQL", "Bandit", "Docker", "Pandas", "Scikit-learn", "Jupyter", "LLM APIs (GPT-5, Claude, Gemini, DeepSeek, CodeLlama)"],
      achievements: [
        "Contributing to a multi-institutional NSF Safe-OSE project (> $30M federal initiative) advancing secure AI-assisted software development",
        "Designed and implemented a benchmarking pipeline to analyze > 10,000 code samples across models, IDEs, and regions",
        "Created a CWE-mapped vulnerability matrix quantifying severity, recurrence, and root causes in LLM-generated code",
        "Developing comparative evaluations across U.S., EU, and Chinese model providers to study dataset bias and security drift",
        "Supporting DSAIL's collaboration with IU's Open Source Ecosystems team to produce reproducible, open-access benchmarks for the research community"
      ],
      image: "/images/research/Paper-2.png",
      links: [
        { label: "Presentation", url: "/documents/DSAIL.pdf", icon: Presentation }
      ]
    },
    {
      title: "Using Transformers and DL with Stance Detection to Forecast Crypto Price Movement",
      description: "Developed a stance-detection-based forecasting system that predicted Bitcoin price movements by combining transformer-based NLP and deep learning time-series models. Built a RoBERTa model to detect bullish vs. bearish market stances from cryptocurrency-related tweets and linked that sentiment to real-world price data through a Recurrent Neural Network. The pipeline achieved 80% stance-detection accuracy and a mean absolute error of $1,144 on price prediction, demonstrating the feasibility of using social media trends for crypto forecasting.",
      duration: "May 2022 - Dec 2022",
      technologies: ["Python", "PyTorch", "HuggingFace Transformers", "RoBERTa", "RNN / LSTM", "yFinance", "Sklearn", "Pandas"],
      achievements: [
        "Fine-tuned a transformer (RoBERTa) for stance detection on 2.5K hand-labeled tweets, achieving 80% accuracy",
        "Designed and trained an RNN to map stance data to Bitcoin closing prices with $1.1K MAE",
        "Integrated transformer outputs with time-series forecasting to bridge NLP and financial prediction",
        "Featured in SSRN Prebit Journal and Connected Papers, where it ranked as a central node in the “AI for Financial Forecasting” cluster",
        "Cited by the University of Southampton (UK) and referenced in follow-up work on financial sentiment modeling"
      ],
      image: "/images/research/Paper-1.png",
      links: [
        { label: "IEEE", url: "https://ieeexplore.ieee.org/document/9953018", icon: BookOpen },
        { label: "Citations", url: "https://eprints.soton.ac.uk/497109/1/Essays_on_Learning_and_Memory_in_Virtual_Currency_Markets_Shuyue_Li.pdf", icon: Quote },
        { label: "PDF", url: "/documents/Paper-1.pdf", icon: FileText }
      ]
    },
  ];

  return (
    <section id="research" className="relative min-h-screen overflow-hidden">
      {/* Duo-tone background - 25% beige on left, 75% burgundy on right */}
      <div className="absolute inset-0 flex">
        <div className="hidden lg:block lg:w-[25%] bg-[#e8cca1]" />
        <div className="w-full lg:w-[75%] bg-[#3f031c]" />
      </div>

      {/* Decorative stepped lines - top right */}
      <svg className="absolute top-20 right-10 hidden lg:block z-0 opacity-40" width="120" height="180" viewBox="0 0 120 190">
        <path 
          fill="none" 
          stroke="#e8cca1" 
          strokeMiterlimit="50" 
          strokeWidth="2" 
          d="M0 0v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26v22.26h22.26"
        />
      </svg>

      {/* Decorative dots grid - bottom left (burgundy) */}
      <div className="absolute bottom-20 left-20 hidden lg:block opacity-15 z-0">
        <div className="grid grid-cols-15 gap-2">
          {Array.from({ length: 225 }).map((_, i) => (
            <div key={`dot-${i}`} className="w-0.5 h-0.5 bg-[#3f031c] rounded-full" />
          ))}
        </div>
      </div>

      <div className="relative z-10 py-20 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#e8cca1] mb-16 text-center">
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
      </div>
    </section>
  );
}

