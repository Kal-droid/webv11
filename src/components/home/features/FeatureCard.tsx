import React from 'react';
import Card from '../../common/Card';
import Text from '../../common/Text';
import AnimatedIcon from '../../common/AnimatedIcon';
import { Feature } from '../../../types/features';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card>
      <div className="p-6">
        <AnimatedIcon className="mb-4">
          {feature.icon}
        </AnimatedIcon>
        <Text variant="h3" className="mb-2">{feature.title}</Text>
        <Text variant="body" className="text-gray-600">{feature.description}</Text>
      </div>
    </Card>
  );
}