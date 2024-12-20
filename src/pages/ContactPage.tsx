import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import Section from '../components/common/Section';
import ContactForm from '../components/contact/ContactForm';
import AnimatedSection from '../components/common/AnimatedSection';
import Text from '../components/common/Text';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: [
      'contact@cbecapitalscs.com',
      'support@cbecapitalscs.com'
    ]
  },
  {
    icon: Phone,
    title: 'Phone',
    details: [
      '+251 116 681 888',
      '+251 116 683 037'
    ]
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      'CBE Head Quarters',
      'Churchill Avenue',
      'Website : cbecapitalsc.com',
      'Addis Ababa, Ethiopia'
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 8:00 AM - 5:00 PM',
      'Saturday: 8:00 AM - 12:00 PM',
      'Sunday: Closed'
    ]
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="py-16">
        <AnimatedSection>
          <Text variant="h1" className="text-center text-primary mb-12">
            Contact Us
          </Text>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Text variant="h2" className="text-primary mb-6">
                Send Us a Message
              </Text>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Text variant="h2" className="text-primary mb-6">
                Contact Information
              </Text>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <Text variant="h4" className="text-gray-800 mb-2">
                        {info.title}
                      </Text>
                      {info.details.map((detail, index) => (
                        <Text 
                          key={index}
                          variant="body" 
                          className="text-gray-600"
                        >
                          {detail}
                        </Text>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </div>
  );
}