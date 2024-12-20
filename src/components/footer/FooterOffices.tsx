import React from 'react';
import { MapPin } from 'lucide-react';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';

const offices = [
  {
    city: 'Dubai',
    country: 'UAE'
  },
  {
    city: 'Nairobi',
    country: 'Kenya'
  },
  {
    city: 'Johannesburg',
    country: 'South Africa'
  }
];

export default function FooterOffices() {
  return (
    <div className="space-y-4">
      <Text variant="h4">International Offices</Text>
      <div className="space-y-3">
        {offices.map((office) => (
          <div key={office.city} className="flex items-center space-x-3">
            <AnimatedIcon className="text-accent">
              <MapPin className="h-5 w-5" />
            </AnimatedIcon>
            <Text variant="body">
              {office.city}, {office.country}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}