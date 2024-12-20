import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '../components/services/ServicesHero';
import ServiceSection from '../components/services/ServiceSection';
import MarketInsights3D from '../components/sections/market-insights/MarketInsights3D';
import ServicesBackground from '../components/backgrounds/ServicesBackground';
import PageLayout from '../components/layout/PageLayout';

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Blue Section */}
      <div className="relative">
        <ServicesBackground />
        <ServicesHero />
      </div>
      
      {/* White Section */}
      <div className="bg-white">
        <ServiceSection />
      </div>
      
      {/* Blue Section */}
      <div className="bg-gradient-to-b from-primary/95 to-primary">
        <MarketInsights3D />
      </div>
    </PageLayout>
  );
}