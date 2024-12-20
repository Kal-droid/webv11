import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import Card from '../../common/Card';
import Text from '../../common/Text';
import { fadeInUp } from '../../../utils/animations';

interface MarketInsightCard3DProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function MarketInsightCard3D({ title, description, image, index }: MarketInsightCard3DProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      animate={controls}
      custom={index}
      className="group perspective-1000"
    >
      <Card className="h-full transform-gpu transition-all duration-500 hover:rotate-y-10 hover:scale-105">
        <div className="relative h-64 overflow-hidden rounded-t-lg preserve-3d">
          <motion.div
            className="w-full h-full backface-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
        
        <motion.div 
          className="p-6 bg-white rounded-b-lg preserve-3d"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Text variant="h3" className="mb-3 transform-gpu">{title}</Text>
          <Text variant="body" className="text-gray-600 transform-gpu">{description}</Text>
        </motion.div>
      </Card>
    </motion.div>
  );
}