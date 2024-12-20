import React from 'react';

interface GradientProps {
  from: string;
  to: string;
  direction?: 'to-t' | 'to-b' | 'to-l' | 'to-r' | 'to-tl' | 'to-tr' | 'to-bl' | 'to-br';
  className?: string;
  children?: React.ReactNode;
}

export default function Gradient({
  from,
  to,
  direction = 'to-b',
  className = '',
  children
}: GradientProps) {
  return (
    <div className={`bg-gradient-${direction} from-${from} to-${to} ${className}`}>
      {children}
    </div>
  );
}