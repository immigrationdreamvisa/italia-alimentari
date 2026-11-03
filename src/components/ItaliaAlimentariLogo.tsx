import React from 'react';
import originalLogoWhite from '../assets/images/italia_alimentari_original_white.png';
import originalLogoDark from '../assets/images/italia_alimentari_original_dark.png';

export interface ItaliaAlimentariLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  showTagline?: boolean; // kept for compatibility
}

export const ItaliaAlimentariLogo: React.FC<ItaliaAlimentariLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  onClick
}) => {
  // Use official original logo assets downloaded from italiaalimentari.it
  const logoSrc = variant === 'dark' ? originalLogoWhite : originalLogoDark;

  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-10 sm:h-12 md:h-14',
    xl: 'h-12 sm:h-15 md:h-16'
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center shrink-0 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      <img
        src={logoSrc}
        alt="Italia Alimentari - Salumi e snack che guardano al futuro"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-200 ${
          onClick ? 'group-hover:opacity-95 group-hover:scale-[1.01]' : ''
        }`}
        style={{ aspectRatio: '550 / 99' }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default ItaliaAlimentariLogo;
