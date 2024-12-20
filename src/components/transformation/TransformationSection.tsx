import React from 'react';
import { motion } from 'framer-motion';
import { transformationSteps } from '../../data/transformation';
import TransformationCard from './TransformationCard';
import Text from '../common/Text';

export default function TransformationSection() {
  return (
    <div className="py-24 bg-gradient-to-b from-primary-light to-primary">
      <div className="container mx-auto px-4 max-w-5xl"> {/* Reduced width by 20% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="text-white mb-4">
            Empowering Africa's Capital Market Transformation
          </Text>
          <Text variant="body" className="text-accent-light text-lg max-w-3xl mx-auto">
            A strategic approach to revolutionizing the financial landscape
          </Text>
        </motion.div>
        
        <div className="space-y-16"> {/* Increased spacing between cards */}
          {transformationSteps.map((step, index) => (
            <TransformationCard
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}