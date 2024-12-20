import React from 'react';
import VisionHero from '../components/vision/VisionHero';
import TransformationSection from '../components/transformation/TransformationSection';
import ValuePyramid from '../components/value-proposition/ValuePyramid';
import PageLayout from '../components/layout/PageLayout';

export default function VisionPage() {
  return (
    <PageLayout>
      {/* Blue Section */}
      <VisionHero />
      
      {/* White Section */}
      <div className="bg-white">
        <ValuePyramid />
      </div>
      
      {/* Blue Section */}
      <div className="bg-gradient-to-b from-primary/95 to-primary">
        <TransformationSection />
      </div>
    </PageLayout>
  );
}