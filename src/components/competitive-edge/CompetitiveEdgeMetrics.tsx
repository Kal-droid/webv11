import React from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../../data/competitive-edge';
import MetricCard from './MetricCard';
import Text from '../common/Text';

export default function CompetitiveEdgeMetrics() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Text variant="h3" className="text-primary mb-4">
          Measuring Our Impact
        </Text>
        <Text variant="body" className="text-gray-600 max-w-2xl mx-auto">
          Our commitment to excellence is reflected in our key performance indicators
        </Text>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {metrics.map((category, index) => (
          <MetricCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}