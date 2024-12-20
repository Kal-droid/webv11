import React from 'react';
import Hero from '../components/home/Hero';
import StrategicOverview from '../components/sections/StrategicOverview';
import ServiceSection from '../components/services/ServiceSection';
import TransformationSection from '../components/transformation/TransformationSection';
import JoinUsSection from '../components/join/JoinUsSection';
import PageLayout from '../components/layout/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      {/* Blue Section - Hero */}
      <section className="relative bg-gradient-to-b from-primary/95 to-primary">
        <Hero />
      </section>
      
      {/* White Section - Strategic Overview */}
      <section className="relative bg-white">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
        <StrategicOverview />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
      </section>
      
      {/* Blue Section - Transformation */}
      <section className="relative bg-gradient-to-b from-primary/95 to-primary">
        <TransformationSection />
      </section>
      
      {/* White Section - Services */}
      <section className="relative bg-white">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
        <ServiceSection />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
      </section>
      
      {/* Blue Section - Join Us */}
      <section className="relative bg-gradient-to-b from-primary/95 to-primary">
        <JoinUsSection />
      </section>
    </PageLayout>
  );
}