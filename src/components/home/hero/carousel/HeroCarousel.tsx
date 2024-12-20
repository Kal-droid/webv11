import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselCard from './CarouselCard';
import { HERO_IMAGES } from '../../../../constants/images';

const cards = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description: 'Pioneering investment banking and brokerage services that drive financial growth.',
    image: HERO_IMAGES.innovativeSolutions
  },
  {
    id: 2,
    title: 'Global Expertise',
    description: 'Delivering world-class financial solutions tailored to local market needs.',
    image: HERO_IMAGES.globalExpertise
  },
  {
    id: 3,
    title: 'Local Market Leadership',
    description: 'Leveraging our deep understanding of Ethiopia\'s economic landscape.',
    image: HERO_IMAGES.localMarket
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % cards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] w-full max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          {cards.map((card, index) => (
            index === currentIndex && (
              <CarouselCard
                key={card.id}
                card={card}
                isActive={true}
              />
            )
          ))}
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}