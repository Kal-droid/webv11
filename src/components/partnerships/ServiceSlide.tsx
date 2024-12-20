import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';

interface ServiceSlideProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
}

export default function ServiceSlide({ number, title, description, isActive }: ServiceSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className={`absolute inset-0 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-2xl font-bold">
            {number}
          </div>
          <div>
            <Text variant="h3" className="text-white mb-3">{title}</Text>
            <Text variant="body" className="text-accent-light">{description}</Text>
          </div>
        </div>
      </div>
    </motion.div>
  );
}