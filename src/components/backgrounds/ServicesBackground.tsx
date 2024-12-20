import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract Financial Pattern */}
      <svg
        className="absolute w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="services-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>

          <pattern
            id="financial-symbols"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <g className="text-primary/20">
              <motion.path
                d="M40,120 L80,80 L120,120 L160,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.circle
                cx="120"
                cy="120"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#services-grid)" />
        <rect width="100%" height="100%" fill="url(#financial-symbols)" />
      </svg>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
    </div>
  );
}