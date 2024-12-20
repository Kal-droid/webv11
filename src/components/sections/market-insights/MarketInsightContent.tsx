import React from 'react';
import { motion, AnimationControls } from 'framer-motion';
import Text from '../../common/Text';
import { fadeInUp, staggerChildren } from '../../../utils/animations';

interface MarketInsightContentProps {
  title: string;
  description: string;
  controls: AnimationControls;
}

export default function MarketInsightContent({ 
  title, 
  description, 
  controls 
}: MarketInsightContentProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate={controls}
      className="relative z-10 text-center mb-16"
    >
      <motion.div variants={fadeInUp}>
        <Text variant="h2" className="text-white mb-6">
          {title}
        </Text>
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <Text variant="body" className="text-accent-light max-w-2xl mx-auto">
          {description}
        </Text>
      </motion.div>
    </motion.div>
  );
}