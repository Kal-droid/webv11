import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <h1 className="text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-wrap items-baseline gap-x-3 mb-4"
      >
        <span className="text-accent text-5xl lg:text-6xl xl:text-7xl font-bold">
          Pioneering Ethiopia's
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl lg:text-6xl xl:text-7xl font-bold"
      >
        & Africa's Financial Future
      </motion.div>
    </h1>
  );
}