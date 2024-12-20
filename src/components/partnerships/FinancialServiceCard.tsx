import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';

interface FinancialServiceCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

export default function FinancialServiceCard({ number, title, description, delay }: FinancialServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        <div>
          <Text variant="h3" className="text-white mb-2">{title}</Text>
          <Text variant="body" className="text-accent-light">{description}</Text>
        </div>
      </div>
    </motion.div>
  );
}