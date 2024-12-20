import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Lightbulb, Shield } from 'lucide-react';
import { CoreStrength } from '../../types/competitive-edge';
import Card from '../common/Card';
import Text from '../common/Text';

const iconMap = {
  Globe2,
  Users,
  Lightbulb,
  Shield
};

interface CompetitiveEdgeCardProps {
  strength: CoreStrength;
  index: number;
}

export default function CompetitiveEdgeCard({ strength, index }: CompetitiveEdgeCardProps) {
  const Icon = iconMap[strength.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              {Icon && <Icon className="h-8 w-8 text-primary" />}
            </div>
            <Text variant="h3" className="text-primary">
              {strength.title}
            </Text>
          </div>
          
          <Text variant="body" className="text-gray-600 mb-6">
            {strength.description}
          </Text>
          
          <div className="space-y-3">
            {strength.capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                <Text variant="body" className="text-gray-700">
                  {capability}
                </Text>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}