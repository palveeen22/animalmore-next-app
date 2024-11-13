import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton = ({ children, onClick, className = '' }: GradientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 
        rounded-lg 
        text-white 
        font-semibold 
        transition-all 
        duration-200 
        hover:opacity-90 
        active:scale-95
        ${className}
      `}
      style={{
        background: 'linear-gradient(90.36deg, #D65AC9 5.36%, #F5D424 173.64%)'
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;