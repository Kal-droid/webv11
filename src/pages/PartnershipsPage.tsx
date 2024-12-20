import React from 'react';
import PartnershipsHero from '../components/partnerships/PartnershipsHero';
import JoinUsSection from '../components/join/JoinUsSection';
import Partnerships from '../components/home/Partnerships';
import PageLayout from '../components/layout/PageLayout';

export default function PartnershipsPage() {
  return (
    <PageLayout>
      {/* Blue Section */}
      <div className="bg-gradient-to-b from-primary/95 to-primary">
        <PartnershipsHero />
      </div>
      
      {/* White Section */}
      <div className="bg-white">
        <Partnerships />
      </div>
      
      {/* Blue Section */}
      <div className="bg-gradient-to-b from-primary/95 to-primary">
        <JoinUsSection />
      </div>
    </PageLayout>
  );
}