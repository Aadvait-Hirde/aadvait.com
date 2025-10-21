'use client';

interface HamburgerMenuProps {
  onClick: () => void;
}

export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <div className="fixed top-8 right-8 md:top-12 md:right-12 z-40">
      <button 
        onClick={onClick}
        className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
      >
        {/* Black bars on mobile (orange bg), orange bars on desktop (black bg) */}
        <span className="w-8 h-0.5 bg-black lg:bg-orange-500" />
        <span className="w-8 h-0.5 bg-black lg:bg-orange-500" />
        <span className="w-8 h-0.5 bg-black lg:bg-orange-500" />
      </button>
    </div>
  );
}

