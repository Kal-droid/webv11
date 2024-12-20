import React from 'react';
import { valuePropositions } from '../../data/business';
import Section from '../sections/Section';
import ValuePropositionHeader from './ValuePropositionHeader';
import ValuePropositionGrid from './ValuePropositionGrid';

export default function ValuePropositionSection() {
  return (
    <Section 
      pattern 
      patternVariant="dark" 
      className="bg-primary text-white"
    >
      <ValuePropositionHeader title="Our Unique Value Proposition" />
      <ValuePropositionGrid propositions={valuePropositions} />
    </Section>
  );
}