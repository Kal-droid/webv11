import React from 'react';
import { images } from '../../data/images';
import ContentSection from './ContentSection';

export default function ServicesShowcase() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ContentSection
          title="Investment Banking Excellence"
          description="Our investment banking services combine global expertise with deep local market knowledge, providing comprehensive solutions for mergers, acquisitions, and corporate restructuring."
          image={images.services.investment}
        />
        
        <ContentSection
          title="Strategic Advisory Services"
          description="Expert guidance through complex financial landscapes, helping businesses and institutions navigate growth opportunities and market challenges."
          image={images.services.advisory}
          reverse
        />
        
        <ContentSection
          title="Financial Innovation"
          description="Pioneering new financial products and services tailored to Ethiopia's evolving market needs, driving technological advancement in the financial sector."
          image={images.services.innovation}
        />
      </div>
    </div>
  );
}