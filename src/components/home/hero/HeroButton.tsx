import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  to: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  id?: string;
}

export default function HeroButton({ 
  to, 
  variant, 
  children, 
  icon: Icon,
  id = 'hero-button'
}: HeroButtonProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    // Log navigation attempt
    console.log(`Navigating to: ${to}`);
    
    // Perform navigation
    navigate(to);
  }, [navigate, to]);

  const baseStyles = "relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-all duration-200";
  const variantStyles = {
    primary: "bg-accent hover:bg-accent-light text-primary shadow-lg hover:shadow-xl",
    secondary: "border-2 border-accent hover:bg-accent/20 text-accent hover:text-accent-light"
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-testid={`${id}-${variant}`}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {Icon && (
          <Icon 
            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
            aria-hidden="true"
          />
        )}
      </span>
    </motion.button>
  );
}