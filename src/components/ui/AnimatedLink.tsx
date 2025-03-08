
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  external?: boolean;
  onClick?: () => void;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className,
  underline = true,
  external = false,
  onClick,
}) => {
  const baseClasses = 'relative inline-block transition-all duration-300 ease-out-expo';
  const underlineClasses = underline
    ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-custom-ease hover:after:origin-bottom-left'
    : '';
  
  const combinedClasses = cn(baseClasses, underlineClasses, className);
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link to={href} className={combinedClasses} onClick={onClick}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
