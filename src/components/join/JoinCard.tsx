import React from 'react';
import { motion } from 'framer-motion';
import { JoinUsSection } from '../../types/join';

interface JoinCardProps {
  section: JoinUsSection;
  index: number;
}

export default function JoinCard({ section, index }: JoinCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
        <img 
          src={section.image} 
          alt={section.title}
          className="absolute inset-0 w-full h-full object-contain bg-gray-50"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-primary mb-3">{section.title}</h3>
        <p className="text-gray-600">{section.description}</p>
      </div>
    </motion.div>
  );
}