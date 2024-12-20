import React from 'react';
import { motion } from 'framer-motion';
import { coreStrengths } from '../../data/competitive-edge';
import Text from '../common/Text';
import Grid from '../common/Grid';
import CompetitiveEdgeCard from './CompetitiveEdgeCard';

export default function CompetitiveEdgeSection() {
  return (
    <div className="py-24 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Text variant="h2" className="text-primary mb-4">
          Our Competitive Edge
        </Text>
        <Text variant="body" className="text-gray-600 max-w-2xl mx-auto">
          Combining global expertise with deep local insights to deliver innovative financial solutions.
        </Text>
      </motion.div>

      <Grid cols={2} gap={8}>
        {coreStrengths.map((strength, index) => (
          <CompetitiveEdgeCard
            key={strength.id}
            strength={strength}
            index={index}
          />
        ))}
      </Grid>
    </div>
  );
}