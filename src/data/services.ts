import { FinancialService } from '../types/services';
import { SERVICE_IMAGES } from '../constants/images';

export const financialServices: FinancialService[] = [
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    description: 'Offering strategic guidance for mergers, acquisitions, restructurings, and corporate defense activities, underwriting public offerings and private placements of securities across various sectors and financial structuring services for businesses looking to expand and optimize their operations.',
    features: [
      'Mergers & Acquisitions',
      'Corporate Restructuring',
      'Public Offerings',
      'Private Placements',
      'Market Making'
    ],
    image: SERVICE_IMAGES.investment
  },
  {
    id: 'brokerage',
    title: 'Brokerage Services',
    description: 'Providing a transparent and reliable channel for trading securities, catering to companies, individuals, and institutions.',
    features: [
      'Securities Trading',
      'Market Analysis',
      'Portfolio Management',
      'Trading Platform',
      'Research Services'
    ],
    image: SERVICE_IMAGES.brokerage
  },
  {
    id: 'custodial',
    title: 'Custodial Services',
    description: 'Acting as a trustworthy intermediary to maintain and record securities, ensuring the highest standards of asset protection. Managing assets for institutional and individual clients with tailored investment strategies.',
    features: [
      'Asset Protection',
      'Securities Management',
      'Record Keeping',
      'Investment Strategy',
      'Client Portfolio Management'
    ],
    image: SERVICE_IMAGES.custodial
  }
];