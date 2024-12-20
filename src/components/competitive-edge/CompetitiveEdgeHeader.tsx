import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';

export default function CompetitiveEdgeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <Text variant="h2" className="text-primary mb-4">
        Our Competitive Edge: Experience Meets Innovation
      </Text>
      <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
        A comprehensive approach combining global expertise, local insights, and innovative solutions
        to drive Ethiopia's financial sector forward.
      </Text>
    </motion.div>
  );
}