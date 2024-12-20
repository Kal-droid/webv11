import React from 'react';
import Section from '../common/Section';
import Text from '../common/Text';
import ServiceSlideshow from './slideshow/ServiceSlideshow';

export default function ServiceSection() {
  return (
    <Section 
      hasPattern // Updated from pattern to hasPattern
      className="bg-white"
      id="services-section"
    >
      <Text 
        variant="h2" 
        className="text-center mb-12"
      >
        Comprehensive Financial Services
      </Text>
      <ServiceSlideshow />
    </Section>
  );
}