export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface FinancialService {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface VisionStep {
  id: number;
  title: string;
  description: string;
}