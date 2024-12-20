import React from 'react';
import HeroFeature from './HeroFeature';
import { HERO_IMAGES } from '../../../constants/images';

const features = [
  {
    title: 'Innovative Solutions',
    description: 'Pioneering investment banking and brokerage services that drive financial growth and market development in Ethiopia.',
    image: HERO_IMAGES.innovativeSolutions
  },
  {
    title: 'Global Expertise',
    description: 'Delivering world-class financial solutions and best practices tailored to meet local market needs.',
    image: HERO_IMAGES.globalExpertise
  },
  {
    title: 'Local Market Leadership',
    description: 'Leveraging our deep understanding of Ethiopia\'s economic landscape to create lasting value.',
    image: HERO_IMAGES.localMarket
  }
];

export default function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {features.map((feature, index) => (
        <HeroFeature
          key={feature.title}
          {...feature}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
}