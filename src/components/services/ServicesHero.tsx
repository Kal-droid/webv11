import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Text from '../common/Text';
import Container from '../common/Container';

export default function ServicesHero() {
  return (
    <div className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <TrendingUp className="h-16 w-16 text-accent" />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {/* Updated this section to handle mobile wrapping better */}
            <Text variant="h1" className="mb-6">
              <span className="block sm:inline">Financial Services</span>
              <span className="block sm:inline">&nbsp;& Solutions</span>
            </Text>
            
            <Text variant="body" className="text-accent-light text-lg md:text-xl">
              Comprehensive investment banking and advisory services tailored for an evolving financial landscape
            </Text>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}