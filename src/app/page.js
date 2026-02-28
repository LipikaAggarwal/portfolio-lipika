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
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />

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
        className="flex flex-col gap-16 px-4 sm:px-6 lg:px-8 xl:px-10 py-24 max-w-6xl mx-auto scroll-mt-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-white">CONTACT</h2>

        <div className="flex flex-col lg:flex-row gap-36">
          <div className="flex-2">
            <ContactForm />
          </div>
          <div className="flex-1">
            <Contact />
          </div>
        </div>
      </motion.section>
        <footer className="text-gray-300 text-center py-4 mt-auto">
    <div className="mx-8 mb-3 h-[1px] bg-gray-600 opacity-30"></div>
      <p>© 2025 Lipika. Made with ♥︎ using Next.js</p>
    </footer>
    </div>
  );
}
