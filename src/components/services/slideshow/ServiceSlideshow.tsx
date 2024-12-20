import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { financialServices } from '../../../data/services';
import ServiceSlide from './ServiceSlide';
import SlideControls from './SlideControls';
import SlideIndicators from './SlideIndicators';

export default function ServiceSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % financialServices.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + financialServices.length) % financialServices.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Services slideshow"
    >
      {/* Slides Container */}
      <motion.div 
        className="relative h-[400px] bg-white rounded-xl overflow-hidden"
        whileHover={{ boxShadow: "0 10px 40px rgba(0, 0, 128, 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {financialServices.map((service, index) => (
            <ServiceSlide
              key={service.id}
              service={service}
              isActive={currentSlide === index}
            />
          ))}
        </AnimatePresence>

        <SlideControls
          onPrev={prevSlide}
          onNext={nextSlide}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      </motion.div>

      <SlideIndicators
        total={financialServices.length}
        current={currentSlide}
        onChange={setCurrentSlide}
      />
    </div>
  );
}