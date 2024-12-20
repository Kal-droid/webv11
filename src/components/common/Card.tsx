import React from 'react';
import { motion } from 'framer-motion';
import { cardStyles } from '../../utils/design-system';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'dark';
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  onClick 
}: CardProps) {
  const baseStyle = variant === 'glass' 
    ? cardStyles.glass 
    : variant === 'dark' 
      ? cardStyles.dark 
      : cardStyles.base;

  return (
    <motion.div
      className={`${baseStyle} ${className}`}
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}