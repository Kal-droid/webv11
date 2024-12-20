import React from 'react';
import { motion } from 'framer-motion';
import { marketInsights } from '../../../data/market-insights';
import MarketInsightCard from './MarketInsightCard';
import Grid from '../../common/Grid';

export default function MarketInsightsGrid() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <Grid cols={3} gap={8}>
        {marketInsights.map((insight, index) => (
          <MarketInsightCard
            key={insight.id}
            {...insight}
            index={index}
          />
        ))}
      </Grid>
    </motion.div>
  );
}