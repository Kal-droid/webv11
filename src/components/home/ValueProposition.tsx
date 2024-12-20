import React from 'react';
import { valuePropositions } from '../../data/business';
import Container from '../common/Container';
import Text from '../common/Text';
import Card from '../common/Card';
import Grid from '../common/Grid';
import Section from '../common/Section';

export default function ValueProposition() {
  return (
    <Section className="bg-blue-600 text-white">
      <Text variant="h2" className="text-center mb-12">
        Our Unique Value Proposition
      </Text>
      <Grid cols={2} gap={12}>
        {valuePropositions.map((prop) => (
          <Card key={prop.title} className="bg-blue-700/30">
            <div className="p-8">
              <Text variant="h3" className="mb-4">{prop.title}</Text>
              <Text variant="body" className="leading-relaxed">{prop.description}</Text>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}