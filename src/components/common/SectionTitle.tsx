import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl font-bold mb-12 ${className}`}>
      {title}
    </h2>
  );
}