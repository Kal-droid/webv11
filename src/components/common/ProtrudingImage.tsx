import React from 'react';
import { motion } from 'framer-motion';

interface ProtrudingImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProtrudingImage({ src, alt, className = '' }: ProtrudingImageProps) {
  return (
    <motion.div
      className={`relative z-10 transform-gpu ${className}`}
      whileHover={{ scale: 1.1, z: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
      </div>
      
      {/* Shadow Effect */}
      <div className="absolute -inset-4 bg-black/20 blur-xl -z-10 transform-gpu transition-all duration-300 opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}