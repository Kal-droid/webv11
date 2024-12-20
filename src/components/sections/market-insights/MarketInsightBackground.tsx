import React from 'react';
import { motion } from 'framer-motion';

export default function MarketInsightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3D Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(152,255,152,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(152,255,152,0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
    </div>
  );
}