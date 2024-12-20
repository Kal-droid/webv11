import React from 'react';
import { motion } from 'framer-motion';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden relative z-50 p-2 focus:outline-none" // Added md:hidden
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <motion.div
        className="flex flex-col justify-center items-center w-6 h-6"
        animate={isOpen ? "open" : "closed"}
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-6 h-0.5 bg-white mb-1 last:mb-0 rounded-full"
            variants={{
              closed: {
                y: 0,
                rotate: 0,
                opacity: 1,
              },
              open: {
                y: index === 1 ? 0 : index === 0 ? 8 : -8,
                rotate: index === 1 ? 0 : index === 0 ? 45 : -45,
                opacity: index === 1 ? 0 : 1,
              },
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </button>
  );
}