import React from 'react';
import { Feature } from '../../../types/features';
import FeatureCard from './FeatureCard';
import Grid from '../../common/Grid';
import Section from '../../common/Section';
import Text from '../../common/Text';

interface FeatureListProps {
  features: Feature[];
  title?: string;
}

export default function FeatureList({ features, title }: FeatureListProps) {
  return (
    <Section className="bg-gray-50">
      {title && (
        <Text variant="h2" className="text-center mb-12">
          {title}
        </Text>
      )}
      <Grid cols={3} gap={8}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </Grid>
    </Section>
  );
}