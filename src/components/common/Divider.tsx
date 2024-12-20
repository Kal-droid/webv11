import React from 'react';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ 
  className = '',
  orientation = 'horizontal' 
}: DividerProps) {
  if (orientation === 'vertical') {
    return <div className={`w-px h-full bg-gray-200 ${className}`} />;
  }

  return <div className={`h-px w-full bg-gray-200 ${className}`} />;
}