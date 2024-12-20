import React from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  return (
    <motion.div
      className={`relative w-full perspective-1000 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative preserve-3d transform-gpu transition-all duration-300 hover:rotate-y-3 hover:rotate-x-3">
        {children}
      </div>
    </motion.div>
  );
}