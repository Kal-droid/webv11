import React from 'react';
import { motion } from 'framer-motion';
import CompetitiveStrengthsMap from './CompetitiveStrengthsMap';
import AdvantageFlow from './AdvantageFlow';
import Section from '../common/Section';
import Text from '../common/Text';

export default function CompetitiveEdgeAnalysis() {
  return (
    <Section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text variant="h2" className="text-center text-white mb-12">
          Our Competitive Edge: An Integrated System
        </Text>
      </motion.div>

      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CompetitiveStrengthsMap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AdvantageFlow />
        </motion.div>
      </div>
    </Section>
  );
}