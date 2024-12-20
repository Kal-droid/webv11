import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const insights = [
  {
    id: 1,
    title: 'Investment Banking',
    description: 'Strategic guidance for mergers, acquisitions, and corporate restructuring',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Market Analysis',
    description: 'In-depth analysis of Ethiopian and African market trends',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Financial Innovation',
    description: 'Developing cutting-edge financial products for emerging markets',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
];

export default function MarketInsights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Market Insights & Expertise" 
          className="text-white text-center"
        />
        
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <img
                  src={insights[currentIndex].image}
                  alt={insights[currentIndex].title}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">
                  {insights[currentIndex].title}
                </h3>
                <p className="text-xl text-gray-300">
                  {insights[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}