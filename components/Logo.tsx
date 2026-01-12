
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

/**
 * Standardized Logo component using Main_logo.png.
 * Displays only the image asset without any accompanying text or fallbacks.
 */
const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, light = false }) => {
  const heightClass = iconOnly ? 'h-8 md:h-10' : 'h-10 md:h-12';

  return (
    <div className={`flex items-center justify-start ${className}`}>
      <img 
        src="./Main_logo.png" 
        alt="Nexus Logo" 
        className={`
          ${heightClass} 
          w-auto 
          block 
          object-contain 
          transition-all 
          duration-300
          ${light ? 'brightness-0 invert' : ''}
        `}
        loading="eager"
        onError={(e) => {
          // Silent fail - no text fallback as per user request
          const target = e.target as HTMLImageElement;
          target.style.opacity = '0';
          console.warn("Main_logo.png failed to load. Please verify the file is in the root directory.");
        }}
      />
    </div>
  );
};

export default Logo;
