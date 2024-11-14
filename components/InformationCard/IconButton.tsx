import Image from 'next/image';
import React from 'react';

interface IconButtonProps {
  icon: string;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  alt: string;
  width: number
  height: number
  className?: string | undefined
}

const IconButton = ({ icon, isHovered, onMouseEnter, onMouseLeave, alt, width, height, className }: IconButtonProps) => {
  return (
    <button
      className="flex items-center justify-center w-6 h-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={alt}
    >
      <Image
        src={icon}
        alt={alt}
        width={width}
        height={height}
        className={className ? `${className}` : "transition-colors duration-200"}        style={{
          filter: isHovered
            ? 'invert(67%) sepia(14%) saturate(1531%) hue-rotate(308deg) brightness(92%) contrast(89%)'
            : 'none'
        }}
      />
    </button>
  );
};

export default IconButton