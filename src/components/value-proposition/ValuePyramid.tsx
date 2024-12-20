import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Text from '../common/Text';

const pyramidLevels = [
  {
    level: 1,
    text: 'Pioneer Industry Transformation',
    description: 'Leading the way in modernizing Ethiopia\'s financial sector'
  },
  {
    level: 2,
    text: 'Empower Businesses and Investors',
    description: 'Providing tools and resources for growth and success'
  },
  {
    level: 3,
    text: 'Foster Economic Development',
    description: 'Contributing to sustainable economic growth'
  },
  {
    level: 4,
    text: 'Catalyze National Growth',
    description: 'Driving transformative national development'
  }
];

export default function ValuePyramid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Text variant="h2" className="text-primary mb-4">
            Our Vision: Transforming Ethiopia's and Africa's Financial Landscape
          </Text>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {pyramidLevels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-4 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-bold rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 ${
                index % 2 === 0 ? 'mr-4' : 'ml-4'
              }`}>
                {level.level}
              </div>
              <div className={`flex-1 ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {level.text}
                  </h3>
                  <p className="text-gray-600">{level.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2 -z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <Text variant="body" className="text-gray-600">
            At CBE Capital, we envision a future where Ethiopia's financial sector drives transformative national development. Our mission is to become the cornerstone of financial growth and stability, empowering businesses and investors through innovative financial offerings.
          </Text>
        </motion.div>
      </div>
    </div>
  );
}