import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavItem } from '../../types/navigation';

interface MobileNavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

export default function MobileNavLink({ item, isActive, onClick }: MobileNavLinkProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="mb-4"
    >
      <Link
        to={item.to}
        onClick={onClick}
        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-primary-dark text-accent'
            : 'text-white hover:bg-primary-dark hover:text-accent-light'
        }`}
      >
        {item.icon}
        <span className="text-lg">{item.text}</span>
      </Link>
    </motion.div>
  );
}