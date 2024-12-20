import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';

interface SuccessMessageProps {
  onReset: () => void;
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        Message Sent Successfully!
      </h3>
      <p className="text-gray-600 mb-6">
        Thank you for contacting us. We'll get back to you shortly.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
      >
        Send Another Message
      </Button>
    </motion.div>
  );
}