import { Variants } from 'framer-motion';

export const hoverEffects: Variants = {
  scale: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  lift: {
    y: -5,
    transition: { duration: 0.2 }
  },
  glow: {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
    transition: { duration: 0.2 }
  }
};