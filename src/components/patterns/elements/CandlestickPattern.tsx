import React from 'react';

interface CandlestickPatternProps {
  className?: string;
}

export default function CandlestickPattern({ className = '' }: CandlestickPatternProps) {
  return (
    <pattern
      id="candlestick-pattern"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
      className={className}
    >
      {/* Candlestick elements */}
      <line x1="10" y1="15" x2="10" y2="25" className="stroke-current" strokeWidth="0.5" />
      <rect x="8" y="17" width="4" height="6" className="fill-current" />
      <line x1="30" y1="10" x2="30" y2="30" className="stroke-current" strokeWidth="0.5" />
      <rect x="28" y="20" width="4" height="8" className="fill-current" />
    </pattern>
  );
}