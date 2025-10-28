'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <footer className="bg-[#3f031c] text-white py-16 px-8 md:px-12 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute -bottom-16 md:-bottom-24 lg:-bottom-32 left-0 right-0 pointer-events-none select-none flex items-center justify-center">
        <p className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold leading-none text-[#4a1f2e] opacity-50">
          aadvait
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Aadvait Hirde</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              The most cracked student at Indiana University.
            </p>
            <p className="text-xs text-gray-400">
              © {currentYear} Aadvait Hirde
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#e8cca1]">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors cursor-pointer">
                  Work
                </a>
              </li>
              <li>
                <a href="#research" onClick={(e) => handleNavClick(e, '#research')} className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors cursor-pointer">
                  Research
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors cursor-pointer">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#e8cca1]">
              Social
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/Aadvait-Hirde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/aadvait-hirde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/aadvaitn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="mailto:aadvait.cr@gmail.com"
                  className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#e8cca1]">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/Aadvait-Hirde-Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#e8cca1] transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

