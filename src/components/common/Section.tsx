import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import PatternBackground from '../backgrounds/PatternBackground';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  hasPattern?: boolean; // Changed from pattern to hasPattern
  patternVariant?: 'light' | 'dark';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  hasPattern = false, // Changed from pattern to hasPattern
  patternVariant = 'light',
  containerSize = 'lg',
  id,
  ...props
}, ref) => {
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative py-16 overflow-hidden scroll-mt-16 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {hasPattern && ( // Changed from pattern to hasPattern
        <PatternBackground 
          variant={patternVariant} 
          animate 
          opacity={patternVariant === 'dark' ? 0.2 : 0.15}
        />
      )}
      <Container size={containerSize} className="relative z-10">
        {children}
      </Container>
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;