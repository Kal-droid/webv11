import React from 'react';
import { motion } from 'framer-motion';
import ImageCard from '../common/ImageCard';

interface ContentSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ContentSection({ title, description, image, reverse = false }: ContentSectionProps) {
  return (
    <div className="py-12">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImageCard
            image={image}
            alt={title}
            className="h-96"
          />
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}