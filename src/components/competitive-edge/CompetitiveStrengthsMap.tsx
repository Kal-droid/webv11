import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Lightbulb, Shield } from 'lucide-react';
import { coreStrengths } from '../../data/competitive-edge';
import Card from '../common/Card';

export default function CompetitiveStrengthsMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {coreStrengths.map((strength, index) => (
        <motion.div
          key={strength.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                {strength.icon === 'Globe2' && <Globe2 className="h-6 w-6 text-primary" />}
                {strength.icon === 'Users' && <Users className="h-6 w-6 text-primary" />}
                {strength.icon === 'Lightbulb' && <Lightbulb className="h-6 w-6 text-primary" />}
                {strength.icon === 'Shield' && <Shield className="h-6 w-6 text-primary" />}
                <h3 className="text-xl font-semibold">{strength.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{strength.description}</p>
              <div className="space-y-2">
                {strength.capabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}