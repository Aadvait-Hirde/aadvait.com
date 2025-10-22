'use client';

interface HamburgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function HamburgerMenu({ onClick, isOpen }: HamburgerMenuProps) {
  // Don't render when menu is open (NavigationMenu has its own close button)
  if (isOpen) return null;
  
  return (
    <div className="fixed top-8 right-8 md:top-12 md:right-12 z-40">
      <button 
        onClick={onClick}
        className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
      >
        {/* Hamburger bars */}
        <span className="w-8 h-0.5 bg-[#3f031c] lg:bg-[#e8cca1]" />
        <span className="w-8 h-0.5 bg-[#3f031c] lg:bg-[#e8cca1]" />
        <span className="w-8 h-0.5 bg-[#3f031c] lg:bg-[#e8cca1]" />
      </button>
    </div>
  );
}

