import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Text from '../common/Text';

const timelineSteps = [
  {
    number: 1,
    title: 'High-Level Networks',
    description: 'Leverage our extensive connections across Africa and globally to provide unparalleled access to markets and investment opportunities.'
  },
  {
    number: 2,
    title: 'Global Best Practices',
    description: 'Implement internationally recognized standards and practices, adapted to the unique Ethiopian context.'
  },
  {
    number: 3,
    title: 'Local Market Expertise',
    description: 'Navigate Ethiopia\'s regulatory landscape and market dynamics with our in-depth local knowledge.'
  },
  {
    number: 4,
    title: 'Innovative Product Development',
    description: 'Create cutting-edge financial products tailored to Ethiopia\'s evolving market needs.'
  }
];

export default function CompetitiveEdgeTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="relative py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Text variant="h2" className="text-primary mb-4">
          Our Competitive Edge: Experience Meets Innovation
        </Text>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 transform -translate-y-1/2" />

        {/* Timeline Items */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Number Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                {step.number}
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}