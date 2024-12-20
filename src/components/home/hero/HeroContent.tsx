import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import Button from '../../common/Button';
import { HERO_IMAGES } from '../../../constants/images';
import { trackEvent } from '../../../utils/analytics';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Innovative Solutions',
    description: 'Pioneering investment banking and brokerage services that drive financial growth and market development.',
    image: HERO_IMAGES.innovativeSolutions
  },
  {
    title: 'Global Expertise',
    description: 'Delivering world-class financial solutions and best practices tailored to meet local market needs.',
    image: HERO_IMAGES.globalExpertise
  },
  {
    title: 'Local Market Leadership',
    description: 'Leveraging our deep understanding of economic landscape to create lasting value.',
    image: HERO_IMAGES.localMarket
  }
];

export default function HeroContent() {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    trackEvent('hero_button_click', { button: 'explore_services' });
    navigate('/services');
  };

  const handlePartnerWithUs = () => {
    trackEvent('hero_button_click', { button: 'partner_with_us' });
    navigate('/partnerships');
  };

  return (
    <div className="space-y-12">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="text-accent">CBE Capital</span>
        <span className="text-white">: Pioneering</span>
        <br />
        <span className="text-white">Africa's Financial Future</span>
      </motion.h1>

      <motion.p
        className="text-accent-light text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        Driving financial inclusion and empowerment across the African continent.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden group"
          >
            <div className="relative h-48 md:h-56">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-accent-light text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          variant="primary"
          size="lg"
          onClick={handleExploreServices}
          icon={<ArrowRight />}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          Explore Our Services
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={handlePartnerWithUs}
          icon={<Users />}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          Partner With Us
        </Button>
      </motion.div>
    </div>
  );
}