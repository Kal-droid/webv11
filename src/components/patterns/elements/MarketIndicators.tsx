import React from 'react';

interface MarketIndicatorsProps {
  className?: string;
}

export default function MarketIndicators({ className = '' }: MarketIndicatorsProps) {
  return (
    <pattern
      id="market-indicators"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
      className={className}
    >
      {/* Market indicator dots */}
      <circle cx="10" cy="10" r="1" className="fill-current" opacity="0.4" />
      <circle cx="30" cy="30" r="1" className="fill-current" opacity="0.4" />
      <line x1="20" y1="20" x2="25" y2="20" className="stroke-current" strokeWidth="0.5" opacity="0.3" />
    </pattern>
  );
}