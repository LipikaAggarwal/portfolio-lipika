"use client";

import React from "react";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { SiPytorch, SiNumpy, SiOpencv, SiJupyter, SiMatplotlib } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGit,
  FaGithub
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "NumPy", icon: <SiNumpy className="text-yellow-400" /> },
  { name: "OpenCV", icon: <SiOpencv className="text-blue-500" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-400" /> },
];

const AboutSection = () => {
  return (
    <section
      className="w-full py-24 px-6 sm:px-10 flex flex-col gap-16 max-w-6xl mx-auto scroll-mt-4 text-white-200"
      id="about"
    >
      <h2 className="text-4xl font-bold text-center text-white">ABOUT</h2>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Skills  */}
        <div className="flex-1 w-full">
          <div className="bg-white/10 backdrop-blur-xl border border-gray-500/30 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-gray-300 to-gray-500 text-gray-200 bg-clip-text text-center">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-20 h-16 rounded-full border border-gray-500/50 bg-black/40 backdrop-blur-md flex items-center justify-center text-4xl shadow-md">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who I Am */}
        <div className="flex-1 max-w-lg">
          <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
            Who I Am
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            I’m a B.Tech student in Energy Engineering driven by curiosity and a love for building things that matter. I’m always exploring how systems connect—whether it’s in code, design, or collaboration—and I find energy in turning ideas into purposeful, tangible outcomes.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Beyond the classroom, I dive into projects that challenge me to learn fast and think creatively—whether I’m organizing an event, crafting a user experience, or fixing bugs at odd hours. I believe in thoughtful, meaningful work, and I’m always up for the next challenge that pushes me a little further.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
