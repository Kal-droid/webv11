import React from 'react';
import { motion } from 'framer-motion';
import CompetitiveEdgeCard from './CompetitiveEdgeCard';
import { coreStrengths } from '../../data/competitive-edge';
import Grid from '../common/Grid';

export default function CompetitiveEdgeGrid() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="mb-16"
    >
      <Grid cols={2} gap={8}>
        {coreStrengths.map((strength, index) => (
          <CompetitiveEdgeCard
            key={strength.id}
            strength={strength}
            index={index}
          />
        ))}
      </Grid>
    </motion.div>
  );
}