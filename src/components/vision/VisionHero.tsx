import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';
import ImageContainer from '../common/ImageContainer';

export default function VisionHero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary/95 to-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <Text 
              variant="h1" 
              className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Our Vision for the Future
            </Text>
            <Text 
              variant="body" 
              className="text-accent-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
            >
              Pioneering innovative financial solutions and driving transformative growth 
              in capital markets through expertise, technology, and strategic partnerships.
            </Text>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
          >
            <ImageContainer
              src="/images/our-vision.jpg"
              alt="Our Vision"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}