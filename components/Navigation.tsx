'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'about' },
    { href: '/work', label: 'work' },
    { href: '/experience', label: 'experience' },
    { href: '/research', label: 'research' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
  ];

  return (
    <nav className="sticky top-0 bg-white z-50 pt-8 pb-6">
      <div className="max-w-3xl mx-auto px-8">
        <div className="flex justify-center gap-16 text-sm text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-black no-underline focus:no-underline ${
                pathname === item.href ? 'text-black font-medium' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

