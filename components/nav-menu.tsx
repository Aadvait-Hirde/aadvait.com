"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function NavMenu() {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isManualScroll, setIsManualScroll] = useState(false);

  React.useEffect(() => {
    // Initialize with first nav item
    const firstItem = ref.current?.querySelector(
      `[href="#${navs[0].href.substring(1)}"]`,
    )?.parentElement;
    if (firstItem) {
      const rect = firstItem.getBoundingClientRect();
      setLeft(firstItem.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling during manual click scrolling
      if (isManualScroll) return;

      const sections = navs.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      // Find the section that's currently in view
      let currentSection = sections[0];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
          break;
        }
      }

      // Only update if section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        const navItem = ref.current?.querySelector(
          `[href="#${currentSection}"]`,
        )?.parentElement;
        if (navItem) {
          setLeft(navItem.offsetLeft);
          setWidth(navItem.offsetWidth);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [isManualScroll, activeSection]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    e.preventDefault();

    const targetId = item.href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Set manual scroll flag
      setIsManualScroll(true);

      // Immediately update nav state
      setActiveSection(targetId);
      const navItem = e.currentTarget.parentElement;
      if (navItem) {
        setLeft(navItem.offsetLeft);
        setWidth(navItem.offsetWidth);
      }

      // Calculate scroll position more accurately
      const elementTop = element.offsetTop;
      const offsetPosition = elementTop - 100; // 100px offset for navbar

      // Smooth scroll with better positioning
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      // Use longer timeout and detect scroll end more reliably
      const resetScrollFlag = () => {
        let scrollTimer: NodeJS.Timeout;
        const handleScrollEnd = () => {
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(() => {
            setIsManualScroll(false);
            window.removeEventListener('scroll', handleScrollEnd);
          }, 150);
        };
        window.addEventListener('scroll', handleScrollEnd);
        handleScrollEnd(); // Start the timer immediately
      };

      resetScrollFlag();
    }
  };

  return (
    <div className="w-full hidden md:block">
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeSection === item.href.substring(1)
                ? "text-primary"
                : "text-primary/60 hover:text-primary"
            } tracking-tight`}
          >
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.name}
            </a>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
