import React from 'react';
import { motion } from 'framer-motion';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <motion.button
      className="fixed top-4 right-4 z-50 w-8 h-8 flex flex-col justify-center items-center bg-transparent"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="w-5 h-0.5 bg-white mb-1 last:mb-0 rounded-full"
          initial={false}
          animate={{
            rotate: isOpen ? index === 1 ? 0 : index === 0 ? 45 : -45 : 0,
            y: isOpen ? index === 1 ? 0 : index === 0 ? 6 : -6 : 0,
            opacity: isOpen && index === 1 ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </motion.button>
  );
}