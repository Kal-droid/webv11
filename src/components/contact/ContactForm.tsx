import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { validateForm } from '../../utils/validation';
import { createMailtoLink } from '../../utils/email';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate form
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Create mailto link
      const mailtoLink = createMailtoLink(formData);
      window.location.href = mailtoLink;
      
      setStatus('success');
      resetForm();

      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="relative">
      {/* Success Message */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-green-100 text-green-700 p-4 rounded-lg"
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6 mt-12">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary h-32"
            required
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}

        <Button
          type="submit"
          variant="primary"
          icon={<Send className="w-5 h-5" />}
          className="w-full"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}