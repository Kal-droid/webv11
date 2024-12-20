import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  className?: string;
}

export default function Text({ 
  children, 
  variant = 'body',
  className = '' 
}: TextProps) {
  const styles = {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    body: 'text-base md:text-lg',
    small: 'text-sm md:text-base'
  };

  const Component = ['h1', 'h2', 'h3', 'h4'].includes(variant) ? variant : 'p';

  return React.createElement(
    Component,
    { className: `${styles[variant]} ${className}` },
    children
  );
}