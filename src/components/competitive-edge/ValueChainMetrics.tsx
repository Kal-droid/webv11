import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Target } from 'lucide-react';
import { metrics } from '../../data/competitive-edge';

export default function ValueChainMetrics() {
  return (
    <div className="space-y-8">
      {metrics.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center space-x-2">
                  {metric.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                  {metric.trend === 'down' && <TrendingUp className="h-4 w-4 text-red-500" />}
                  <span className="font-medium">{metric.name}</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {metric.value}
                </div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}