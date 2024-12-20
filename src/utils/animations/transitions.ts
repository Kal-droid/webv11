import { Variants } from 'framer-motion';

export const pageTransitions: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const cardTransitions: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  hover: { y: -5, scale: 1.02 },
  tap: { scale: 0.98 }
};

export const listTransitions: Variants = {
  container: {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }
};