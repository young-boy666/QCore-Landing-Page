
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, light = false }) => {
  // Use CSS filter to invert colors if light mode is requested (making a dark logo white)
  const filterStyle = light ? { filter: 'brightness(0) invert(1)' } : {};

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* PNG Logo Asset */}
      <img 
        src="Main_logo.png" 
        alt="Nexus Technology"
        style={filterStyle}
        className={`
          h-8 md:h-10 w-auto object-contain flex-shrink-0
          ${iconOnly ? 'mx-auto' : ''}
        `}
      />
      
      {/* Brand Wordmark - ensures name is visible even if PNG is icon-only or loading */}
      {!iconOnly && (
        <div className="flex flex-col leading-[0.85] select-none">
          <span className={`text-2xl font-[900] tracking-[-0.04em] ${light ? 'text-white' : 'text-gray-900'}`}>
            NEXUS
          </span>
          <span className={`text-[9px] font-extrabold tracking-[0.35em] uppercase ${light ? 'text-white/70' : 'text-brand-purple'}`}>
            Technology
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
