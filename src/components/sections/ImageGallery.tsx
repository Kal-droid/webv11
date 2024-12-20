import React from 'react';
import { motion } from 'framer-motion';
import ImageCard from '../common/ImageCard';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold text-primary mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ImageCard
              image={image}
              alt={`${title} ${index + 1}`}
              className="h-64"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}