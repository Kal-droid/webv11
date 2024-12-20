import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { advantageFlow } from '../../data/competitive-edge';

export default function AdvantageFlow() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="relative">
        {advantageFlow.map((advantage, index) => (
          <motion.div
            key={advantage.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center mb-8"
          >
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
            {index < advantageFlow.length - 1 && (
              <ArrowRight className="mx-4 text-primary" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}