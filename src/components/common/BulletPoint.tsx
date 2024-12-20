import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface BulletPointProps {
  text: string;
  delay?: number;
}

export default function BulletPoint({ text, delay = 0 }: BulletPointProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center space-x-2 group"
    >
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
        <Check className="w-3 h-3 text-accent" />
      </div>
      <span className="text-gray-700 text-sm">{text}</span>
    </motion.div>
  );
}