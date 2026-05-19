"use client";

import { motion } from "framer-motion";
import Main from "@/components/Home";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      <Navbar />

      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Main />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>


        <motion.section
          id="contact"
          className="flex flex-col gap-16 px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-12 max-w-6xl mx-auto scroll-mt-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 pl-4">
            <div className="flex flex-col items-start">
              <span className="text-sm uppercase tracking-widest text-gray-400 mb-1">CONTACT</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s Connect</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 items-start lg:items-center w-full">
            <div className="w-full lg:flex-1 lg:ml-8">
              <ContactForm />
            </div>
            <div className="w-full lg:flex-1 lg:mr-8">
              <Contact />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="text-gray-300 text-center py-4">
        <div className="mx-8 mb-3 h-[1px] bg-gray-600 opacity-30"></div>
        <p>© 2025 Lipika Aggarwal</p>
      </footer>
    </div>
  );
}
