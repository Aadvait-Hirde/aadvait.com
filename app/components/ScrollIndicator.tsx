'use client';

interface ScrollIndicatorProps {
  activeSection: number;
  totalSections: number;
  onSectionClick: (index: number) => void;
}

export default function ScrollIndicator({ 
  activeSection, 
  totalSections, 
  onSectionClick 
}: ScrollIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 hidden lg:flex">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSectionClick(index)}
          className="group relative flex items-center justify-center"
          aria-label={`Go to section ${index + 1}`}
        >
          {index === activeSection ? (
            // Diamond (active state) - Square rotated
            <div className="w-3 h-3 border-2 border-orange-500 rotate-45 transition-all bg-transparent" />
          ) : (
            // Square (inactive state)
            <div className="w-2.5 h-2.5 border-2 border-orange-500/60 transition-all group-hover:border-orange-500 bg-transparent" />
          )}
        </button>
      ))}
    </div>
  );
}

