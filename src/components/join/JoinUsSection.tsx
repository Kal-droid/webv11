import React from 'react';
import { motion } from 'framer-motion';
import { joinUsSections } from '../../data/join';
import JoinCard from './JoinCard';
import SectionTitle from '../common/SectionTitle';

export default function JoinUsSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Join us in Shaping the Capital Market" 
            className="text-white text-center mb-12"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {joinUsSections.map((section, index) => (
            <JoinCard 
              key={section.id} 
              section={section} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}