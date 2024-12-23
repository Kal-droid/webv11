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
      <div className="flex flex-col h-full overflow-y-auto px-4 py-6 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Visual Section */}
          <div className="flex items-center">
            <motion.div 
              className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 30px rgba(0, 0, 128, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-start space-y-4">
            <Text variant="h3" className="text-primary">
              {service.title}
            </Text>
            <Text variant="body" className="text-gray-600">
              {service.description}
            </Text>
            <div className="grid grid-cols-1 gap-3 pb-16 md:pb-0">
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
      </div>
    </motion.div>
  );
}
