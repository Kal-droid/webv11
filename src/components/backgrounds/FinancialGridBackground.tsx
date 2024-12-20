import React from 'react';
import { FinancialPattern } from '../patterns';

interface FinancialGridBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function FinancialGridBackground({ 
  className = '', 
  opacity = 0.15 
}: FinancialGridBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <FinancialPattern opacity={opacity} />
      
      {/* Additional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20" />
    </div>
  );
}