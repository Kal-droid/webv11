import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';
import { NavLink } from '../../types/navigation';

interface FooterLinksProps {
  title: string;
  links: NavLink[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <Text variant="h4">{title}</Text>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.to}>
            <Link 
              to={link.to}
              className="hover:text-accent transition-colors flex items-center space-x-2"
            >
              <AnimatedIcon>
                <ExternalLink className="h-4 w-4" />
              </AnimatedIcon>
              <Text variant="body">{link.text}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}