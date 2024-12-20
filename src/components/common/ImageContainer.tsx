import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageContainer({ src, alt, className = '' }: ImageContainerProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative w-full aspect-[3/4] max-h-[800px] overflow-hidden ${className}`}>
      {/* Main Image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={() => setImageLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Gradient Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent pointer-events-none" />

      {/* Loading State */}
      <motion.div
        className="absolute inset-0 bg-primary/30 backdrop-blur-xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: imageLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 3D Effect Border */}
      <motion.div
        className="absolute inset-0 border border-accent/20 pointer-events-none"
        animate={{ 
          scale: [1, 1.02, 1],
          rotateY: [0, 3, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}