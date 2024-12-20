import React from 'react';
import { motion } from 'framer-motion';
import { ValueProposition } from '../../types/business';
import Card from '../common/Card';
import Text from '../common/Text';

interface ValuePropositionCardProps {
  proposition: ValueProposition;
  index: number;
}

export default function ValuePropositionCard({ proposition, index }: ValuePropositionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card 
        className="bg-blue-700/30 h-full transform hover:scale-105 transition-all duration-300"
        hover={true}
      >
        <div className="p-8">
          <Text 
            variant="h3" 
            className="mb-4 text-white"
          >
            {proposition.title}
          </Text>
          <Text 
            variant="body" 
            className="leading-relaxed text-accent-light"
          >
            {proposition.description}
          </Text>
        </div>
      </Card>
    </motion.div>
  );
}