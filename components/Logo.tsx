
import React from 'react';

import mainLogo from '@/src/assets/Main_logo.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, light = false, small = false }) => {
  // Use CSS filter to invert colors if light mode is requested (making a dark logo white)
  const filterStyle = light ? { filter: 'brightness(0) invert(1)' } : {};

  // Determine size based on context
  const getSizeClass = () => {
    if (small) return 'w-8 md:w-10';
    if (iconOnly) return 'w-10 md:w-12';
    return 'w-28 md:w-32';
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={mainLogo}
        alt="Nexus Technology"
        style={filterStyle}
        className={`h-auto object-contain ${getSizeClass()}`}
      />
    </div>
  );
};

export default Logo;
