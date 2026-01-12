
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
    <div className={`flex items-center ${className}`}>
      <img 
        src="Main_logo.png" 
        alt="Nexus Technology"
        style={filterStyle}
        className={`
          h-auto object-contain
          ${iconOnly ? 'w-10 md:w-12' : 'w-32 md:w-40'}
        `}
      />
    </div>
  );
};

export default Logo;
