"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:lipika.aggarwal@yahoo.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to open mail client:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="relative bg-transparent border border-gray-500/30 rounded-2xl p-8 space-y-6 backdrop-blur-md"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: '#9ca3af' }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-500/30 rounded-xl focus:outline-none focus:border-gray-400 transition-all duration-300 text-gray-100 placeholder-gray-400"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: '#9ca3af' }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-500/30 rounded-xl focus:outline-none focus:border-gray-400 transition-all duration-300 text-gray-100 placeholder-gray-400"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: '#9ca3af' }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-transparent border border-gray-500/30 rounded-xl focus:outline-none focus:border-gray-400 transition-all duration-300 text-gray-100 placeholder-gray-400 resize-none"
            placeholder="Let's build something amazing together..."
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-gray-200 bg-gray-400/10 p-3 rounded-lg border border-gray-400/20"
          >
            <CheckCircle size={20} />
            <span>Email client opened! Please send the email to complete your message.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-gray-200 bg-gray-400/10 p-3 rounded-lg border border-gray-400/20"
          >
            <AlertCircle size={20} />
            <span>Unable to open email client. Please email me directly at lipika.aggarwal@yahoo.com</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full font-semibold 
                     bg-gradient-to-r from-gray-400 to-gray-600 
                     hover:from-gray-300 hover:to-gray-500 
                     transition-all duration-300 text-gray-900 shadow-md 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>

        <p className="text-sm text-gray-400 text-center">
          This will open your default email client with pre-filled information
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
