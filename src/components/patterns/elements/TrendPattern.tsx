import React from 'react';

interface TrendPatternProps {
  className?: string;
}

export default function TrendPattern({ className = '' }: TrendPatternProps) {
  return (
    <pattern
      id="trend-pattern"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
      className={className}
    >
      {/* Trend lines */}
      <path
        d="M0,40 L40,0"
        className="stroke-current"
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M0,20 L20,0"
        className="stroke-current"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
    </pattern>
  );
}