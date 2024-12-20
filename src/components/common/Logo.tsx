import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BRAND_IMAGES } from '../../constants/images';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`block ${className}`}>
      <motion.img
        src={BRAND_IMAGES.logo}
        alt="CBE Capital"
        className="h-12 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}