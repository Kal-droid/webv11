import React from 'react';
import { motion } from 'framer-motion';

interface HeroFeatureProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export default function HeroFeature({ title, description, image, delay = 0 }: HeroFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="relative h-48 md:h-56 lg:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-accent-light">{description}</p>
      </div>
    </motion.div>
  );
}