import React from 'react';
import Container from '../../common/Container';
import MarketInsightBackground from './MarketInsightBackground';
import MarketInsightContent from './MarketInsightContent';
import MarketInsights3DGrid from './MarketInsights3DGrid';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function MarketInsights3D() {
  const { ref, controls } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-primary py-24"
    >
      <MarketInsightBackground />
      
      <Container className="relative z-10">
        <MarketInsightContent
          title="Market Insights & Expertise"
          description="Leveraging deep market knowledge and innovative analysis to drive strategic decision-making"
          controls={controls}
        />
        <MarketInsights3DGrid />
      </Container>
    </div>
  );
}