import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  image: string;
  alt: string;
  className?: string;
}

export default function ImageCard({ image, alt, className = '' }: ImageCardProps) {
  return (
    <motion.div 
      className={`overflow-hidden rounded-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={image} 
        alt={alt}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  );
}