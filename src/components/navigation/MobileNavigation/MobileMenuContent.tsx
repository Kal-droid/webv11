import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../../types/navigation';

interface MobileMenuContentProps {
  navItems: NavItem[];
  onClose: () => void;
}

export default function MobileMenuContent({ navItems, onClose }: MobileMenuContentProps) {
  return (
    <nav className="h-full py-20 px-6 overflow-y-auto">
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <motion.li
            key={item.to}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-dark text-accent'
                    : 'text-white hover:bg-primary-dark hover:text-accent-light'
                }`
              }
            >
              {item.icon}
              <span className="text-lg font-medium">{item.text}</span>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}