import React from 'react';
import { motion } from 'framer-motion';
import { FinancialService } from '../../types/services';
import { PiggyBank, BarChart2, Shield } from 'lucide-react';
import Card from '../common/Card';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';

const iconMap = {
  'piggy-bank': PiggyBank,
  'bar-chart': BarChart2,
  'shield': Shield
};

interface ServiceCardProps {
  service: FinancialService;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card
        hover={true}
        className="h-full transform transition-all duration-300 hover:scale-105"
      >
        <motion.div 
          className="p-6"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <Text variant="h3" className="mb-2 text-primary">{service.title}</Text>
              {Icon && (
                <AnimatedIcon>
                  <Icon className="h-8 w-8 text-accent" />
                </AnimatedIcon>
              )}
            </div>
          </div>
          <Text variant="body" className="text-gray-600 mb-4">{service.description}</Text>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <motion.li
                key={feature}
                className="flex items-center text-sm text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Card>
    </motion.div>
  );
}