"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    // Previous behaviour (mailto) commented out to replace with server-side send
    /*
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
    */

    // Use EmailJS
    const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.PUBLIC_EMAILJS_PUBLIC_KEY;
    const EMAILJS_TO_EMAIL = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || process.env.PUBLIC_EMAILJS_TO_EMAIL || '2212lipika@gmail.com';
    const EMAILJS_REPLY_TO = process.env.NEXT_PUBLIC_EMAILJS_REPLY_TO || process.env.PUBLIC_EMAILJS_REPLY_TO || formData.from_email;
    const EMAILJS_CC = process.env.NEXT_PUBLIC_EMAILJS_CC || process.env.PUBLIC_EMAILJS_CC || '';
    const EMAILJS_BCC = process.env.NEXT_PUBLIC_EMAILJS_BCC || process.env.PUBLIC_EMAILJS_BCC || '';
    const EMAILJS_USE_DEFAULT_EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAILJS_USE_DEFAULT_EMAIL_ADDRESS || process.env.PUBLIC_EMAILJS_USE_DEFAULT_EMAIL_ADDRESS || 'true';

    if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY && EMAILJS_TO_EMAIL) {
      try {
        const emailjsModule = await import('@emailjs/browser');
        const emailjs = emailjsModule.default || emailjsModule;

        // picks up values even if it uses different variable names.
        const templateParams = {
          // delivery / routing
          to_email: EMAILJS_TO_EMAIL,
          reply_to: EMAILJS_REPLY_TO,
          cc: EMAILJS_CC,
          bcc: EMAILJS_BCC,
          use_default_email_address: EMAILJS_USE_DEFAULT_EMAIL_ADDRESS,
          // subject
          subject: `Portfolio Contact from ${formData.from_name} <${formData.from_email}>`,
          // sender info (duplicate keys to match various template conventions)
          from_name: formData.from_name,
          name: formData.from_name,
          from_email: formData.from_email,
          email: formData.from_email,
          // message body
          message: formData.message,
          body: formData.message,
        };

       
        try {
          
          console.debug('EmailJS payload (sanitized):', {
            service: EMAILJS_SERVICE,
            template: EMAILJS_TEMPLATE,
            publicKey: EMAILJS_PUBLIC_KEY ? '***' : null,
            to_email: templateParams.to_email,
            reply_to: templateParams.reply_to,
            subject: templateParams.subject,
            from_name: templateParams.from_name,
            from_email: templateParams.from_email,
          });
        } catch (logErr) {
          // ignore logging errors
        }

        try {
          if (typeof emailjs.init === 'function' && EMAILJS_PUBLIC_KEY) {
            try {
              emailjs.init(EMAILJS_PUBLIC_KEY);
            } catch (initErr) {
              // ignore init error and continue to send with key argument
            }
          }

          await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY);
        } catch (sendErr) {
          // stringify possible error details
          let errDetails = sendErr;
          try {
            errDetails = JSON.stringify(sendErr);
          } catch (e) {
            errDetails = String(sendErr);
          }
          console.error('EmailJS send error (detailed):', errDetails);
          throw sendErr;
        }

        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          message: '',
        });
      } catch (err) {
        console.error('EmailJS send error:', err);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    console.error('EmailJS environment variables are missing.');
    setSubmitStatus('error');
    setIsSubmitting(false);
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
            id="from_name"
            name="from_name"
            value={formData.from_name}
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
            id="from_email"
            name="from_email"
            value={formData.from_email}
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
            placeholder="Let&apos;s build something amazing together..."
          />
        </div>

        {/* Status Messages */}
{submitStatus === 'success' && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-2 text-green-300 bg-green-500/10 p-3 rounded-lg border border-green-500/20"
  >
    <CheckCircle size={20} className="text-green-400" />
    <span>Your message was sent successfully.</span>
  </motion.div>
)}

{submitStatus === 'error' && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-2 text-red-300 bg-red-500/10 p-3 rounded-lg border border-red-500/20"
  >
    <AlertCircle size={20} className="text-red-400" />
    
    <span>
      Unable to send the message. Please contact me directly at{" "}
      <a
        href="mailto:lipika.aggarwal@yahoo.com"
        className="underline hover:text-white transition-colors"
      >
        lipika.aggarwal@yahoo.com
      </a>
    </span>
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

        
      </form>
    </motion.div>
  );
};

export default ContactForm;
