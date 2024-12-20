import { LucideIcon } from 'lucide-react';

export interface NavLink {
  text: string;
  to: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
}