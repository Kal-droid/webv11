import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';
import { fadeInUp } from '../../utils/animations';

interface ValuePropositionHeaderProps {
  title: string;
}

export default function ValuePropositionHeader({ title }: ValuePropositionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-center mb-12"
    >
      <Text variant="h2" className="text-white">
        {title}
      </Text>
    </motion.div>
  );
}