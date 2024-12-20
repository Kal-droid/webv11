import React from 'react';
import { Globe2, Lightbulb, MapPin } from 'lucide-react';
import Section from '../sections/Section';
import Card from '../common/Card';
import Grid from '../common/Grid';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';

const features = [
  {
    title: 'Innovative Solutions',
    description: 'Pioneering investment banking and brokerage services that drive financial growth and market development in Ethiopia.',
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Global Expertise',
    description: 'Our management include professionals with many Years of experience with several of the world\'s largest investment firms.',
    icon: <Globe2 className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Local Market Leadership',
    description: 'Leveraging our deep understanding of Ethiopia\'s economic landscape to create lasting value.',
    icon: <MapPin className="h-8 w-8 text-blue-600" />
  }
];

export default function Features() {
  return (
    <Section pattern patternVariant="light" className="bg-white">
      <Grid cols={3} gap={8}>
        {features.map((feature) => (
          <Card key={feature.title}>
            <div className="p-6">
              <AnimatedIcon className="mb-4">
                {feature.icon}
              </AnimatedIcon>
              <Text variant="h3" className="mb-2">{feature.title}</Text>
              <Text variant="body" className="text-gray-600">{feature.description}</Text>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}