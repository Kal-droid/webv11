import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import PatternBackground from '../backgrounds/PatternBackground';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
  patternVariant?: 'light' | 'dark';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string; // Make id prop explicit
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  pattern = false,
  patternVariant = 'light',
  containerSize = 'lg',
  id, // Add id to destructuring
  ...props
}, ref) => {
  return (
    <motion.section
      ref={ref}
      id={id} // Add id to the section element
      className={`relative py-16 overflow-hidden scroll-mt-16 ${className}`} // Add scroll-mt-16 for header offset
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {pattern && (
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