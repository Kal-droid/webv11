import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export default function AnimatedIcon({ 
  children, 
  className = '', 
  onClick,
  interactive = true 
}: AnimatedIconProps) {
  const baseAnimation = {
    scale: interactive ? 1.1 : 1,
    rotate: interactive ? [0, -5, 5, 0] : 0
  };

  return (
    <motion.div
      className={`inline-flex ${className}`}
      whileHover={baseAnimation}
      whileTap={{ scale: interactive ? 0.95 : 1 }}
      transition={{ 
        duration: 0.3,
        rotate: { duration: 0.2 },
        bounce: 0.5
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}