"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WildFire Segmentation",
    description:
      "A U-Net–based wildfire detection system that segments fire zones from aerial imagery for real-time disaster monitoring. Enhances emergency response and risk assessment through accurate visual analysis.",
    image: ["/assets/wildfire.png"],
    github: "https://github.com/LipikaAggarwal/WildFire-Segmentation",
    tech: ["Python", "PyTorch", "OpenCV", "Jupyter Notebook", "NumPy", "Matplotlib"],
  },
  {
    title: "Resume Analyser",
    description:
      "A smart web tool that scans resumes, checks key sections and keywords, and gives real-time feedback to improve job-fit and resume quality.",
    image: ["/assets/resume.png", "/assets/resume1.png", "/assets/resume2.png"],
    github: "https://github.com/LipikaAggarwal/resume-analyser",
    tech: ["JavaScript", "Node.js", "Express.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "GPU Memory Estimator",
    description:
      "A web-based tool to calculate GPU memory requirements for LLMs with quantization, model size inputs, and optimization tips.",
    image: ["/assets/gpu.png"],
    github: "https://github.com/LipikaAggarwal/LLM-Memory-Estimator",
    live: "https://lipikaaggarwal.github.io/LLM-Memory-Estimator",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Bank Management System",
    description:
      "A desktop application built using Python and Tkinter for managing user bank accounts with MySQL integration.",
    image: ["/assets/bank.png"],
    github: "https://github.com/LipikaAggarwal/Bank-Management-System",
    tech: ["Python", "MySQL", "Tkinter"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 sm:px-10 max-w-7xl mx-auto text-gray-200 scroll-mt-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-100"
      >
        PROJECTS
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
          const images = project.image;

          const prevImage = () =>
            setCurrentImageIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );

          const nextImage = () =>
            setCurrentImageIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );

          return (
            <div
              key={index}
              className="bg-[#121212] rounded-2xl border border-gray-700/50 p-5 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative mb-4 h-60 w-full rounded-xl bg-black/20">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full rounded-xl transition-transform duration-300"
                />

                {/* Image carousel */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-gray-200 px-3 py-1 rounded-full hover:bg-black/80 transition"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-gray-200 px-3 py-1 rounded-full hover:bg-black/80 transition"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs border border-gray-500/50 rounded-full px-3 py-1 text-gray-300 bg-black/30 hover:bg-black/40 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (kept blue) */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition"
                >
                  <Github size={16} /> GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition"
                  >
                    <ExternalLink size={16} /> Live Code
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-14">
        <a
          href="https://github.com/LipikaAggarwal"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full font-semibold
                    border border-gray-500 text-gray-300
                    hover:bg-gray-200 hover:text-gray-900
                    transition-all duration-300 shadow-md"
        >
          View All Projects
        </a>
      </div>
    </motion.section>
  );
};

export default Projects;
