import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';
import { ContactInfo } from '../../types/contact';

interface FooterContactProps {
  contactInfo: ContactInfo[];
}

export default function FooterContact({ contactInfo }: FooterContactProps) {
  return (
    <div className="space-y-4">
      <Text variant="h4">Contact Us</Text>
      <div className="space-y-3">
        {contactInfo.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center space-x-3">
            <AnimatedIcon className="text-accent">
              <Icon className="h-5 w-5" />
            </AnimatedIcon>
            <Text variant="body">{text}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}