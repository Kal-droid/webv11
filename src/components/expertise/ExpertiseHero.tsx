import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, TrendingUp, Shield } from 'lucide-react';
import Text from '../common/Text';

const expertiseHighlights = [
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Access to international markets and partnerships'
  },
  {
    icon: TrendingUp,
    title: 'Market Leadership',
    description: 'Pioneering financial market development'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation'
  }
];

export default function ExpertiseHero() {
  return (
    <div className="relative h-[60vh] min-h-[600px] flex items-center bg-gradient-to-b from-primary/95 to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Text variant="h1" className="text-white mb-6">
              Our Expertise & Capabilities
            </Text>
            <Text variant="body" className="text-accent-light text-lg mb-8">
              Combining global expertise with deep local insights to deliver innovative financial solutions and drive market transformation.
            </Text>

            {/* Expertise Highlights */}
            <div className="grid gap-6">
              {expertiseHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <Text variant="h4" className="text-white mb-1">
                      {highlight.title}
                    </Text>
                    <Text variant="body" className="text-accent-light">
                      {highlight.description}
                    </Text>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Center Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Globe2 className="w-32 h-32 text-accent" />
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-accent rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 100px'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    delay: i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}