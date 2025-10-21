'use client';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 md:top-12 md:right-12 text-white text-4xl hover:opacity-70"
      >
        ×
      </button>
      <nav className="flex flex-col gap-8 text-center">
        <a 
          href="#hero" 
          onClick={onClose} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-orange-500 transition-colors"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={onClose} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-orange-500 transition-colors"
        >
          About
        </a>
        <a 
          href="#work" 
          onClick={onClose} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-orange-500 transition-colors"
        >
          Work
        </a>
        <a 
          href="#contact" 
          onClick={onClose} 
          className="text-white text-4xl md:text-5xl font-bold hover:text-orange-500 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

