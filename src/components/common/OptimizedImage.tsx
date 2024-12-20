import React from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
    >
      {/* Low-quality placeholder */}
      <div 
        className="absolute inset-0 blur-lg scale-110"
        style={{
          backgroundImage: `url(${src}?quality=10&width=50)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <img
        src={`${src}?quality=75&width=800`}
        alt={alt}
        className={`relative z-10 ${className}`}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}