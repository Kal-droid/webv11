import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  card: {
    title: string;
    description: string;
    image: string;
  };
  isActive: boolean;
}

export default function CarouselCard({ card, isActive }: CardProps) {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-48">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}