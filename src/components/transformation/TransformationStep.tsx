import React from 'react';
import { motion } from 'framer-motion';
import { TransformationStep as TransformationStepType } from '../../types/transformation';
import OptimizedImage from '../common/OptimizedImage';

interface TransformationStepProps {
  step: TransformationStepType;
  index: number;
}

export default function TransformationStep({ step, index }: TransformationStepProps) {
  return (
    <motion.div 
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="w-1/3 h-[300px] relative overflow-hidden">
        <OptimizedImage 
          src={step.image} 
          alt={step.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">
            Step {step.id}
          </span>
          <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
          <p className="text-accent-light text-lg leading-relaxed">{step.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}