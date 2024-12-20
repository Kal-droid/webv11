import React from 'react';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';
import { SocialLink } from '../../types/navigation';

interface FooterSocialProps {
  socialLinks: SocialLink[];
}

export default function FooterSocial({ socialLinks }: FooterSocialProps) {
  return (
    <div className="space-y-4">
      <Text variant="h4">Follow Us</Text>
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-accent transition-colors"
          >
            <AnimatedIcon>
              <Icon className="h-6 w-6" />
            </AnimatedIcon>
          </a>
        ))}
      </div>
    </div>
  );
}