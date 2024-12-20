import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Text from '../common/Text';
import Button from '../common/Button';

const services = [
  {
    number: 1,
    title: 'Sophisticated Investment Products',
    description: 'Introducing complex financial instruments tailored to Ethiopia\'s unique market conditions.'
  },
  {
    number: 2,
    title: 'International Investment Opportunities',
    description: 'Connecting local investors with global markets through our extensive network.'
  },
  {
    number: 3,
    title: 'Specialized Advisory Services',
    description: 'Offering expert guidance for large-scale investments and cross-border transactions.'
  },
  {
    number: 4,
    title: 'Innovative Financial Solutions',
    description: 'Developing unique products like Sukuk bonds and automatic savings features.'
  }
];

export default function PartnershipsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bridging-finacia-services.png"
          alt="Financial Bridge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Text variant="h1" className="text-white mb-6">
              Bridging the Financial Services Gap
            </Text>
            <Text variant="body" className="text-accent-light text-lg mb-8">
              Together, we're building a stronger financial future through innovative solutions, 
              strategic partnerships, and expert guidance.
            </Text>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight />}
              iconPosition="right"
              onClick={() => document.getElementById('partnership-content')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Partnerships
            </Button>
          </motion.div>

          {/* Right Column - Slides */}
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 50
                  }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 ${currentSlide === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  <div 
                    className="relative h-full rounded-lg overflow-hidden group"
                    style={{
                      backgroundImage: `url(/images/bridging-finacia-services.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30 backdrop-blur-sm transition-all duration-500 group-hover:backdrop-blur-0" />
                    
                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold">
                          {service.number}
                        </div>
                        <Text variant="h3" className="text-white">
                          {service.title}
                        </Text>
                      </div>
                      <Text variant="body" className="text-accent-light">
                        {service.description}
                      </Text>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-1000 ${
                    currentSlide === index ? 'w-8 bg-accent' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}