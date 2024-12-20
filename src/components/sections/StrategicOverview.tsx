import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Globe2, TrendingUp, Shield } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const features = [
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: 'Global Expertise',
    description: 'Our management include professionals with many Years of experience with several of the world\'s largest investment firms.'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Market Leadership',
    description: 'Pioneering financial market development'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Local Insights',
    description: 'Our deep understanding of economic landscape allows us to offer services that are both locally relevant and internationally informed. We\'re uniquely positioned to navigate the complexities of the emerging market'
  }
];

export default function StrategicOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionTitle 
            title="Strategic Vision & Expertise" 
            className="text-blue-900"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining global expertise with local insights to transform the financial landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="text-blue-600 flex items-center hover:text-blue-800 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}