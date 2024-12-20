import React from 'react';

interface StepIndicatorProps {
  step: number;
  className?: string;
}

export default function StepIndicator({ step, className = '' }: StepIndicatorProps) {
  return (
    <div className={`bg-blue-100 p-4 rounded-lg ${className}`}>
      <span className="text-2xl font-bold text-blue-600">{step}</span>
    </div>
  );
}