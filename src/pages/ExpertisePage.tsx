import React from 'react';
import ExpertiseHero from '../components/expertise/ExpertiseHero';
import CompetitiveEdgeSection from '../components/competitive-edge/CompetitiveEdgeSection';
import CoreCapabilities from '../components/expertise/CoreCapabilities';
import PageLayout from '../components/layout/PageLayout';

export default function ExpertisePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative">
        <ExpertiseHero />
      </section>
      
      {/* Competitive Edge Section */}
      <section className="relative bg-white">
        {/* Top Gradient Transition */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
        
        <div className="py-24">
          <CompetitiveEdgeSection />
        </div>
        
        {/* Bottom Gradient Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
      </section>
      
      {/* Core Capabilities Section */}
      <section className="relative bg-gradient-to-b from-primary/95 to-primary">
        <CoreCapabilities />
      </section>
    </PageLayout>
  );
}