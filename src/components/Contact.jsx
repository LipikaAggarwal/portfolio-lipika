"use client";
import React from "react";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactDetails = [
  {
    title: "Email",
    icon: <Mail size={24} className="text-gray-300" />,
    value: "lipika.aggarwal@yahoo.com",
    link: "mailto:lipika.aggarwal@yahoo.com",
  },
  {
    title: "GitHub",
    icon: <Github size={24} className="text-gray-300" />,
    value: "github.com/lipikaaggarwal",
    link: "https://github.com/lipikaaggarwal",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin size={24} className="text-gray-300" />,
    value: "linkedin.com/in/lipikaaggarwal",
    link: "https://linkedin.com/in/lipikaaggarwal",
  },
  {
    title: "Location",
    icon: <MapPin size={24} className="text-gray-300" />,
    value: "New Delhi, India",
    link: "",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-xl mx-auto bg-transparent px-0 pt-16 pb-16 space-y-8 text-gray-200"
    >
      {/* Top & Bottom thin lines aligned to container edges so gaps match padding */}
      {/* <div className="absolute top-0 h-px bg-gray-200 left-4 sm:left-6 lg:left-8 xl:left-10 right-4 sm:right-6 lg:right-8 xl:right-10" />
      <div className="absolute bottom-0 h-px bg-gray-200 left-4 sm:left-6 lg:left-8 xl:left-10 right-4 sm:right-6 lg:right-8 xl:right-10" /> */}

      {/* Contact Info List */}
      {contactDetails.map((item, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
          <div className="flex-shrink-0 mt-0.5 sm:mt-1">{item.icon}</div>
          <div className="w-full">
            <h4 className="text-lg sm:text-xl font-semibold tracking-wide text-gray-100">
              {item.title}
            </h4>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base lg:text-lg text-gray-400 hover:text-gray-200 transition-all block mt-1 break-all sm:break-normal"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-sm sm:text-base lg:text-lg text-gray-400 block mt-1">
                {item.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ContactInfo;
