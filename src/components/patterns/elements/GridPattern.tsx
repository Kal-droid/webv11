import React from 'react';

interface GridPatternProps {
  className?: string;
}

export default function GridPattern({ className = '' }: GridPatternProps) {
  return (
    <pattern
      id="grid-pattern"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
      className={className}
    >
      <path
        d="M40 0L0 0 0 40"
        fill="none"
        className="stroke-current"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </pattern>
  );
}