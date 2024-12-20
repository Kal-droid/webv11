import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Container({ 
  children, 
  className = '',
  size = 'lg'
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl'
  };

  return (
    <div className={`mx-auto px-4 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
}