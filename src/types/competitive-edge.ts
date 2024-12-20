export interface CoreStrength {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface AdvantageFlowItem {
  id: number;
  title: string;
  description: string;
}

export interface Metric {
  name: string;
  value: string;
  trend: 'up' | 'down';
  description: string;
}

export interface MetricCategory {
  id: string;
  title: string;
  metrics: Metric[];
}