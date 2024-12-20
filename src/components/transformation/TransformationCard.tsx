import React from 'react';
import { motion } from 'framer-motion';
import { TransformationStep } from '../../types/transformation';
import Card3D from '../common/Card3D';
import ProtrudingImage from '../common/ProtrudingImage';

interface TransformationCardProps {
  step: TransformationStep;
  index: number;
}

export default function TransformationCard({ step, index }: TransformationCardProps) {
  return (
    <Card3D className="group">
      <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300`}>
        {/* Image Section */}
        <div className="w-1/3 -my-8 -mx-4 relative">
          <ProtrudingImage
            src={step.image}
            alt={step.title}
          />
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
      </div>
    </Card3D>
  );
}