import React from 'react';
import { motion } from 'framer-motion';
import { clientPartnerships } from '../../data/business';
import { Users, Building2, Landmark, UserCircle } from 'lucide-react';
import Text from '../common/Text';
import { FEATURE_IMAGES } from '../../constants/images';

const iconMap = {
  institutional: Users,
  private: Building2,
  state: Landmark,
  retail: UserCircle
};

export default function Partnerships() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={FEATURE_IMAGES.partnerships}
                alt="Building Strong Partnerships"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Text variant="h2" className="text-primary mb-6">
                Building Strong Partnerships With Clients
              </Text>
              <Text variant="body" className="text-gray-600 mb-8">
                We believe in fostering lasting relationships that drive mutual growth and success. Our partnership approach combines global expertise with deep local understanding.
              </Text>
            </motion.div>

            <div className="grid gap-6">
              {clientPartnerships.map((partnership) => {
                const Icon = iconMap[partnership.category];
                return (
                  <motion.div
                    key={partnership.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <Text variant="h4" className="text-primary mb-2">
                          {partnership.type}
                        </Text>
                        <Text variant="body" className="text-gray-600">
                          {partnership.description}
                        </Text>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}