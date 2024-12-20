import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../common/Button';
import { trackEvent } from '../../../utils/analytics';

export default function HeroButtons() {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
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
  );
}