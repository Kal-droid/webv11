export interface ValueProposition {
  title: string;
  description: string;
  category: 'global' | 'local';
}

export interface FinancialGap {
  id: number;
  title: string;
  description: string;
}

export interface ClientPartnership {
  type: string;
  description: string;
  category: 'institutional' | 'private' | 'state' | 'retail';
}

export interface CompetitiveEdge {
  id: number;
  title: string;
  description: string;
}