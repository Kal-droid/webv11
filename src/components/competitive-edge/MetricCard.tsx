import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricCategory } from '../../types/competitive-edge';
import Card from '../common/Card';
import Text from '../common/Text';

interface MetricCardProps {
  category: MetricCategory;
  index: number;
}

export default function MetricCard({ category, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="h-full">
        <div className="p-6">
          <Text variant="h4" className="text-primary mb-6">
            {category.title}
          </Text>
          
          <div className="space-y-6">
            {category.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <Text variant="body" className="font-medium">
                      {metric.name}
                    </Text>
                  </div>
                  <Text variant="small" className="text-gray-600">
                    {metric.description}
                  </Text>
                </div>
                <Text variant="h3" className="text-primary font-bold">
                  {metric.value}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}