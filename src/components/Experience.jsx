"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "GHCI 2025",
    sub_title: "Scholar",
    date: "October 2025",
    description:
      "Awarded the Grace Hopper Celebration India Scholarship (GHCI) 2025, recognizing strong technical potential andcontributions to the women-in-tech community.",
    // image: "/assets/hackathon2.jpeg",
  },
  {
    title: "Codess.Cafe",
    sub_title: "Mentee",
    date: "October 2025 - Present",
    description:
      "Engaging in a structured ML cohort to strengthen foundational concepts, work on projects, and grow alongside a vibrant women-in-tech community.",
    // image: "/assets/hackathon2.jpeg",
  },
  // {
  //   title: "GirlScript Summer of Code 2025 (GSSoC)",
  //   sub_title: "Open Source Contributor",
  //   date: "July 2025 - Present",
  //   description:
  //     "Contributing to open-source projects under GirlScript Summer of Code 2025, collaborating with maintainers and improving real-world codebases through active PRs and discussions.",
  //   // image: "/assets/hackathon2.jpeg",
  // },
  // {
  //   title: "SheFi Cohort 7",
  //   sub_title: "Web3 & DeFi Learner",
  //   date: "July 2025 - Present",
  //   description:
  //     "Exploring the intersection of Web3 and finance through SheFi’s community-led program, participating in live sessions and deepening understanding of decentralized technologies.",
  //   // image: "/assets/hackathon2.jpeg",
  // },
  {
    title: "Hackathon Coordinator",
    sub_title: "National Science Day | USBAS, GGSIPU",
    date: "28 February 2025",
    description:
      "Co-organized a university hackathon with over 240 registrations, managing planning, outreach, and logistics. Learned effective coordination, time management, and how to execute large-scale tech events smoothly.",
    // image: "/assets/hackathon2.jpeg",
  },
  {
    title: "Design-a-Con",
    sub_title: "IEEE GGSIPU",
    date: "26 November 2024",
    description:
      "Secured 3rd place in a team of two at Design-a-Con, part of Synapse 10.0, IEEE GGSIPU’s annual tech week. Designed a creative website based on a fictional character, an experience that sharpened my UI/UX skills and collaboration under time constraints.",
    // image: "/assets/design2.jpeg",
  },
  {
    title: "International Python Coding Challenge",
    date: "2022",
    description:
      "Placed 17th globally in the Raffles University Python Coding Challenge 2022, competing among international participants. The experience deepened my logical thinking and problem-solving skills, and earned me a scholarship opportunity from Raffles University, Malaysia.",
    // image: "/ieee.jpg",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-6 sm:px-10 text-gray-200 scroll-mt-8"
    >
      <h2 className="text-center text-4xl font-bold mb-16 text-gray-100">
        EXPERIENCE
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-0 left-[1rem] lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-500 to-gray-700 shadow-md z-0"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative z-10 flex ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              } justify-end`}
            >
              {/* Timeline Circle */}
              <div className="absolute top-1/2 left-[calc(1rem+1px)] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border-4 border-[#0f0f0f] z-10"></div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-[#121212] p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-xl flex flex-col sm:flex-row items-center gap-6 
                  ${index % 2 === 0 ? "lg:ml-[-8]" : "lg:mr-[-8]"} ml-6`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* <div className="w-1/3">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full rounded-lg shadow-md border border-purple-500 object-cover"
                      />
                    </div> */}
                    <div className="w-full text-left">
                      <h3 className="text-xl font-bold mb-1 text-gray-100">
                        {exp.title}
                      </h3>
                      <p className="italic text-md text-gray-400">
                        {exp.sub_title}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        {exp.date}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full text-left">
                      <h3 className="text-xl font-bold mb-1 text-gray-100">
                        {exp.title}
                      </h3>
                      <p className="italic text-md text-gray-400">
                        {exp.sub_title}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        {exp.date}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    {/* <div className="w-1/3">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full rounded-lg shadow-md border border-purple-600 object-cover"
                      />
                    </div> */}
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
