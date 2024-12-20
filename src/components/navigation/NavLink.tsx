import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationStyles } from '../../utils/design-system';
import { NavItem } from '../../types/navigation';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
}

export default function NavLink({ item, isActive }: NavLinkProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={item.to}
        className={`${navigationStyles.item} flex items-center space-x-2 ${
          isActive 
            ? 'text-accent font-medium bg-white/10' 
            : 'text-white/90 hover:text-accent-light hover:bg-white/5'
        }`}
      >
        <span className="text-current">{item.icon}</span>
        <span className="font-medium tracking-wide">{item.text}</span>
      </Link>
    </motion.div>
  );
}