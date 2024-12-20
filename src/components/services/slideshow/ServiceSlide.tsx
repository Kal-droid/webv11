import React from 'react';
import { motion } from 'framer-motion';
import { FinancialService } from '../../../types/services';
import Text from '../../common/Text';
import OptimizedImage from '../../common/OptimizedImage';
import BulletPoint from '../../common/BulletPoint';

interface ServiceSlideProps {
  service: FinancialService;
  isActive: boolean;
}

export default function ServiceSlide({ service, isActive }: ServiceSlideProps) {
  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 }
  };

  return (
    <motion.div
      className={`absolute inset-0 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      variants={slideVariants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full p-6">
        {/* Visual Section */}
        <div className="flex items-center">
          <motion.div 
            className="relative w-full h-[250px] rounded-lg overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 30px rgba(0, 0, 128, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full">
              <OptimizedImage
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <motion.div
              className="absolute inset-0 ring-1 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-4 pr-8">
          <Text variant="h3" className="text-primary">
            {service.title}
          </Text>
          <Text variant="body" className="text-gray-600">
            {service.description}
          </Text>
          <div className="grid grid-cols-1 gap-3 mt-4">
            {service.features.map((feature, index) => (
              <BulletPoint
                key={feature}
                text={feature}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}