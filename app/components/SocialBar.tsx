'use client';

import Image from 'next/image';

export default function SocialBar() {
  const socials = [
    { name: 'GitHub', icon: '/icons/github.svg', url: 'https://github.com/Aadvait-Hirde' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://linkedin.com/in/aadvait-hirde' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: 'https://twitter.com/aadvaitn' },
    { name: 'Email', icon: '/icons/mail.svg', url: 'mailto:aadvait.cr@gmail.com' },
    { name: 'Resume', icon: '/icons/resume.svg', url: '/resume.pdf' },
  ];

  return (
    <div className="fixed left-8 bottom-0 h-screen z-40 hidden lg:flex flex-col items-center justify-end pb-0">
      {/* Social Icons */}
      <div className="flex flex-col gap-4 mb-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center group transition-all"
            aria-label={social.name}
          >
            <Image 
              src={social.icon} 
              alt={social.name}
              width={24}
              height={24}
              className="w-6 h-6 hover:scale-120 transition-transform"
            />
          </a>
        ))}
      </div>

      {/* Vertical Line extending to bottom */}
      <div className="w-0.5 h-24 bg-black/15" />
    </div>
  );
}