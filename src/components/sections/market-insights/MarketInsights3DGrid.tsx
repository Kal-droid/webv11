import React from 'react';
import { motion } from 'framer-motion';
import { marketInsights } from '../../../data/market-insights';
import MarketInsightCard3D from './MarketInsightCard3D';
import Grid from '../../common/Grid';
import { staggerChildren } from '../../../utils/animations';

export default function MarketInsights3DGrid() {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      className="relative z-10"
    >
      <Grid cols={3} gap={8}>
        {marketInsights.map((insight, index) => (
          <MarketInsightCard3D
            key={insight.id}
            {...insight}
            index={index}
          />
        ))}
      </Grid>
    </motion.div>
  );
}