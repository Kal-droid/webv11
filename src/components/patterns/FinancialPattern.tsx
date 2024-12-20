import React from 'react';
import CandlestickPattern from './elements/CandlestickPattern';
import TrendPattern from './elements/TrendPattern';
import GridPattern from './elements/GridPattern';
import MarketIndicators from './elements/MarketIndicators';

interface FinancialPatternProps {
  opacity?: number;
  className?: string;
}

export default function FinancialPattern({ 
  opacity = 0.15,
  className = '' 
}: FinancialPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GridPattern className="text-current" />
        <CandlestickPattern className="text-current" />
        <TrendPattern className="text-current" />
        <MarketIndicators className="text-current" />
      </defs>

      {/* Base Grid */}
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      
      {/* Financial Elements Layer */}
      <rect width="100%" height="100%" fill="url(#candlestick-pattern)" opacity="0.2" />
      <rect width="100%" height="100%" fill="url(#trend-pattern)" opacity="0.15" />
      <rect width="100%" height="100%" fill="url(#market-indicators)" opacity="0.25" />
    </svg>
  );
}