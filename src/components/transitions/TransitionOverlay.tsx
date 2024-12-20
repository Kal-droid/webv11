import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

export default function TransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-accent"
      >
        <BarChart2 className="w-16 h-16" />
      </motion.div>
    </motion.div>
  );
}