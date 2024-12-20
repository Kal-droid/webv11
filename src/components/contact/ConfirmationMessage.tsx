import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ConfirmationMessageProps {
  show: boolean;
}

export default function ConfirmationMessage({ show }: ConfirmationMessageProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 bg-green-100 p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center text-green-700">
            <CheckCircle className="w-5 h-5 mr-2" />
            <p>Thank you for your message. We'll get back to you soon!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}