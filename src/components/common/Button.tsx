import React from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  trackingId?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  trackingId,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: 'bg-accent hover:bg-accent-dark text-primary shadow-lg hover:shadow-xl border-2 border-transparent focus:ring-accent',
    secondary: 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl border-2 border-transparent focus:ring-primary',
    outline: 'border-2 border-accent hover:bg-accent/20 text-accent hover:text-accent-dark focus:ring-accent'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track button click if trackingId is provided
    if (trackingId) {
      trackEvent('button_click', { button_id: trackingId });
    }

    // Add visual feedback
    const button = e.currentTarget;
    button.classList.add('clicked');
    
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);

    // Call the original onClick handler
    onClick?.(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
}