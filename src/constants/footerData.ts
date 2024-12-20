import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { NavLink, SocialLink } from '../types/navigation';
import { ContactInfo } from '../types/contact';

export const socialLinks: SocialLink[] = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Instagram, href: 'https://instagram.com' }
];

export const quickLinks: NavLink[] = [
  { text: 'Overview', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Vision', to: '/vision' },
  { text: 'Contact', to: '/contact' }
];

export const legalLinks: NavLink[] = [
  { text: 'Expertise', to: '/expertise' },
  { text: 'Partnerships', to: '/partnerships' },
  { text: 'Contact', to: '/contact' }
];

export const contactInfo: ContactInfo[] = [
  { icon: Mail, text: 'contact@cbecapital.com' },
  { icon: Phone, text: '+251 116 681 888' },
  { icon: MapPin, text: 'Ras Desta Damtew Street\nAddis Ababa, Ethiopia' }
];