"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const phrases = [
    "a tech enthusiast",
    "a web developer",
    "a Python coder",
    "an AI/ML enthusiast",
    "a problem solver",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenPhrases = 2000;

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex justify-center items-center px-6 text-gray-200"
    >
      <div className="flex flex-col items-center w-full max-w-4xl">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 lg:hidden"
        >
          <img
            src="/assets/lipika.jpeg"
            alt="Lipika Aggarwal"
            className="w-56 h-56 rounded-2xl object-cover border border-gray-600 shadow-xl"
          />
        </motion.div>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide text-center
                     bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400
                     bg-clip-text text-transparent"
        >
          LIPIKA AGGARWAL
        </motion.h1>

        {/* MAIN ROW */}
        <div className="flex flex-col lg:flex-row items-center w-full">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:flex flex-col gap-5 items-center text-2xl mr-16 text-gray-200"
          >
            <a href="https://github.com/LipikaAggarwal" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/lipikaaggarwal" target="_blank" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="mailto:lipika.aggarwal@yahoo.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src="/assets/lipika.jpeg"
              alt="Lipika Aggarwal"
              className="w-64 h-64 rounded-2xl object-cover border border-gray-600 shadow-xl"
            />
          </motion.div>

          {/* CONTENT */}
          <div className="lg:ml-8 text-center lg:text-left max-w-md mt-6 lg:mt-0">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl font-semibold text-gray-300 h-10"
            >
              I am
              <span className="ml-2 text-gray-100">
                {currentText}
                <span className="cursor text-gray-400">|</span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-gray-400"
            >
              Hey, I’m Lipika, a curious soul who loves building things with intention,
              learning as I go, and turning late-night bugs into 2AM “aha!” moments.
              Whether it’s organizing events, designing a site, or debugging with a playlist on; I’m all in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <a
                href="#projects"
                className="inline-block px-6 py-3 rounded-xl font-semibold
                           border border-gray-500 text-gray-300
                           hover:bg-gray-200 hover:text-gray-900 transition"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </div>

        {/* ICONS */}
        <div className="flex lg:hidden gap-6 mt-8 text-2xl text-gray-200">
          <a href="https://github.com/LipikaAggarwal" target="_blank" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/lipikaaggarwal" target="_blank" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:lipika.aggarwal@yahoo.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default About;
