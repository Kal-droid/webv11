import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe2, TrendingUp, Users } from 'lucide-react';
import Text from '../common/Text';
import Card from '../common/Card';

const capabilities = [
  {
    icon: Globe2,
    title: 'Global Market Access',
    description: 'Direct access to international markets and investment opportunities through our extensive network of partners.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies to protect investments and ensure sustainable growth.'
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to identify opportunities and optimize investment strategies.'
  },
  {
    icon: Users,
    title: 'Expert Advisory',
    description: 'Seasoned professionals providing strategic guidance and innovative solutions for complex financial challenges.'
  }
];

export default function CoreCapabilities() {
  return (
    <div className="py-24 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Text variant="h2" className="text-white mb-4">
          Core Capabilities
        </Text>
        <Text variant="body" className="text-accent-light max-w-2xl mx-auto">
          Our comprehensive suite of capabilities enables us to deliver exceptional value and drive transformative outcomes for our clients.
        </Text>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <capability.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <Text variant="h3" className="text-white mb-2">
                      {capability.title}
                    </Text>
                    <Text variant="body" className="text-accent-light">
                      {capability.description}
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}