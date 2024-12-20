import React from 'react';
import { motion } from 'framer-motion';
import { ValueProposition } from '../../types/business';
import ValuePropositionCard from './ValuePropositionCard';
import Grid from '../common/Grid';
import { staggerChildren } from '../../utils/animations';

interface ValuePropositionGridProps {
  propositions: ValueProposition[];
}

export default function ValuePropositionGrid({ propositions }: ValuePropositionGridProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate="animate"
    >
      <Grid cols={2} gap={12}>
        {propositions.map((proposition, index) => (
          <ValuePropositionCard
            key={proposition.title}
            proposition={proposition}
            index={index}
          />
        ))}
      </Grid>
    </motion.div>
  );
}