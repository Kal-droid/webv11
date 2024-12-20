import React from 'react';
import { FinancialPattern } from '../patterns';
import { motion } from 'framer-motion';

interface PatternBackgroundProps {
  variant?: 'light' | 'dark';
  opacity?: number;
  overlay?: boolean;
  className?: string;
  animate?: boolean;
}

export default function PatternBackground({
  variant = 'light',
  opacity = 0.15,
  overlay = true,
  className = '',
  animate = false
}: PatternBackgroundProps) {
  return (
    <motion.div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      initial={animate ? { opacity: 0 } : undefined}
      animate={animate ? { opacity: 1 } : undefined}
      transition={{ duration: 0.6 }}
    >
      <div className={`absolute inset-0 ${variant === 'dark' ? 'bg-primary/5' : 'bg-gray-50/50'}`} />
      
      <FinancialPattern 
        opacity={opacity} 
        className={variant === 'dark' ? 'text-white' : 'text-primary'} 
      />
      
      {overlay && (
        <div className={`absolute inset-0 ${
          variant === 'dark' 
            ? 'bg-gradient-to-b from-transparent via-primary/30 to-primary/50' 
            : 'bg-gradient-to-b from-transparent via-white/30 to-white/50'
        }`} />
      )}
    </motion.div>
  );
}