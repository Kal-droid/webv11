import React from 'react';
import { motion } from 'framer-motion';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function SlideIndicators({
  total,
  current,
  onChange
}: SlideIndicatorsProps) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className="group p-2"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={current === index ? 'true' : 'false'}
        >
          <motion.div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'bg-primary w-8' 
                : 'bg-gray-300 group-hover:bg-primary/50'
            }`}
            layoutId="indicator"
          />
        </button>
      ))}
    </div>
  );
}