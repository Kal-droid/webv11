import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NavItem } from '../../types/navigation';
import MobileNavLink from './MobileNavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, navItems, currentPath }: MobileMenuProps) {
  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={handleBackdropClick}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-primary z-50 shadow-xl"
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="p-2 text-white hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.to}
                  item={item}
                  isActive={currentPath === item.to}
                  onClick={onClose}
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}