import { CoreStrength, AdvantageFlowItem, MetricCategory } from '../types/competitive-edge';

export const coreStrengths: CoreStrength[] = [
  {
    id: 'global-expertise',
    title: 'Global Expertise',
    description: 'Our management include professionals with many Years of experience with several of the world\'s largest investment firms',
    icon: 'Globe2',
    capabilities: [
      'International market knowledge',
      'Cross-border transaction expertise',
      'Global best practices implementation'
    ]
  },
  {
    id: 'local-insights',
    title: 'Local Market Leadership',
    description: 'Deep understanding of Ethiopia\'s economic landscape',
    icon: 'Users',
    capabilities: [
      'Regulatory expertise',
      'Local market relationships',
      'Cultural understanding'
    ]
  },
  {
    id: 'innovation',
    title: 'Financial Innovation',
    description: 'Pioneering new financial products and services',
    icon: 'Lightbulb',
    capabilities: [
      'Product development',
      'Digital transformation',
      'Market-specific solutions'
    ]
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation',
    icon: 'Shield',
    capabilities: [
      'Market risk analysis',
      'Compliance framework',
      'Security protocols'
    ]
  }
];

export const advantageFlow: AdvantageFlowItem[] = [
  {
    id: 1,
    title: 'Market Understanding',
    description: 'Deep insights into local and regional markets'
  },
  {
    id: 2,
    title: 'Strategic Positioning',
    description: 'Optimal positioning for market opportunities'
  },
  {
    id: 3,
    title: 'Innovation Leadership',
    description: 'Pioneering new financial solutions'
  },
  {
    id: 4,
    title: 'Value Creation',
    description: 'Generating sustainable value for stakeholders'
  }
];

export const metrics: MetricCategory[] = [
  {
    id: 'market-presence',
    title: 'Market Presence',
    metrics: [
      {
        name: 'Market Share',
        value: '35%',
        trend: 'up',
        description: 'Leading position in key market segments'
      },
      {
        name: 'Client Satisfaction',
        value: '4.8/5',
        trend: 'up',
        description: 'Consistently high client satisfaction ratings'
      },
      {
        name: 'Innovation Index',
        value: '92%',
        trend: 'up',
        description: 'Industry-leading innovation metrics'
      }
    ]
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence',
    metrics: [
      {
        name: 'Process Efficiency',
        value: '98%',
        trend: 'up',
        description: 'Streamlined operational processes'
      },
      {
        name: 'Risk Management',
        value: 'AAA',
        trend: 'up',
        description: 'Top-tier risk management rating'
      },
      {
        name: 'Cost Efficiency',
        value: '15%',
        trend: 'down',
        description: 'Year-over-year cost reduction'
      }
    ]
  }
];