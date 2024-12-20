import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary/95 backdrop-blur-sm z-50">
      <div className="relative">
        <motion.div
          className="text-accent"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BarChart2 className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute inset-0 border-4 border-accent/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}