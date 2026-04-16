"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiBookOpen,
  FiTrendingUp,
  FiAward,
  FiUsers,
} from "react-icons/fi";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Technical Skills", icon: <FiCode /> },
    { id: "experience", label: "Experience", icon: <FiTrendingUp /> },
    { id: "education", label: "Education", icon: <FiAward /> },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description:
        "Building responsive web applications with modern technologies and best practices.",
      icon: <FiCode />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Data Analyst Intern",
      company: "Tech Solutions Inc.",
      period: "2022 - 2023",
      description:
        "Analyzed datasets and created interactive dashboards for business insights.",
      icon: <FiDatabase />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Project Developer",
      company: "Academic Projects",
      period: "2021 - 2022",
      description:
        "Developed various applications and systems during academic studies.",
      icon: <FiLayers />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2019 - 2023",
      gpa: "3.8/4.0",
      icon: <FiAward />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      degree: "Full Stack Development",
      institution: "Online Certification",
      year: "2022",
      specialization: "MERN Stack",
      icon: <FiCode />,
      color: "from-cyan-500 to-teal-500",
    },
  ];

  const stats = [
    {
      value: "6 Months",
      label: "MERN Experience",
      icon: <FiTrendingUp />,
      color: "text-cyan-400",
    },
    {
      value: "4+",
      label: "Web Applications",
      icon: <FiCode />,
      color: "text-purple-400",
    },
    {
      value: "JWT + REST",
      label: "Backend Expertise",
      icon: <FiDatabase />,
      color: "text-pink-400",
    },
    {
      value: "MongoDB",
      label: "Database Specialization",
      icon: <FiUsers />,
      color: "text-amber-400",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const ProgressBar = ({ level, gradient }) => (
    <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden mt-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`absolute inset-y-0 left-0 h-full bg-gradient-to-r ${gradient} rounded-full`}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 sm:mb-6">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-cyan-300">
              Get to Know Me
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2"
          >
            Passionate developer crafting digital experiences with cutting-edge
            technologies
          </motion.p>
        </motion.div>

  

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* My Journey */}
            <motion.div
              variants={itemVariants}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 p-1.5 sm:p-2 rounded-lg">
                  <FiCode className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </span>
                My Journey
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                Enthusiastic and results-driven MERN Stack Developer with 6
                months of hands-on experience building scalable web applications
                using MongoDB, Express.js, React.js, and Node.js. Skilled in
                developing RESTful APIs, implementing JWT authentication, and
                designing responsive user interfaces using Tailwind CSS and
                Material-UI.
              </p>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Passionate about writing clean, efficient code and solving
                real-world problems through full-stack development while
                continuously learning modern technologies.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={itemVariants}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
                Experience
              </h3>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <FiCode className="text-white text-base sm:text-lg" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    MERN Stack Developer (Intern / Junior Developer)
                  </h4>
                  <div className="text-xs sm:text-sm text-cyan-300 mb-1 sm:mb-2">
                    6 Months Experience
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Developed and maintained full-stack web applications using
                    React.js, Node.js, Express.js, and MongoDB. Built REST APIs,
                    implemented JWT-based authentication, managed CRUD
                    operations, optimized performance, and deployed
                    applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            {/* <motion.div
              variants={itemVariants}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Education</h3>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FiBookOpen className="text-white text-base sm:text-lg" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Bachelor of Science in Computer Science
                  </h4>
                  <div className="text-xs sm:text-sm text-purple-300 mb-1 sm:mb-2">
                    Dr. Babasaheb Ambedkar Marathwada University • 2021 – 2024
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Grade: 65.60%</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Education
                </h3>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <FiBookOpen className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      Bachelor of Science in Computer Science
                    </h4>
                    <div className="text-xs sm:text-sm text-purple-300 mb-1 sm:mb-2">
                      Dr. Babasaheb Ambedkar Marathwada University • 2021 – 2024
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Grade: 65.60%
                    </div>
                  </div>
                </div>
              </motion.div>

              
            </motion.div>

            {/* What I Bring */}
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 p-1.5 sm:p-2 rounded-lg">
                  <FiUsers className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </span>
                What I Bring
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    quality: "Problem Solving",
                    desc: "Strong analytical and debugging skills",
                  },
                  {
                    quality: "Clean Code",
                    desc: "Structured and maintainable coding practices",
                  },
                  {
                    quality: "Fast Learner",
                    desc: "Quick adaptation to modern technologies",
                  },
                  {
                    quality: "Team Collaboration",
                    desc: "Effective communication & teamwork",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
                  >
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">
                      {item.quality}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <motion.p
            className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Passionate about developing secure, scalable, and high-performance
            web applications while delivering innovative full-stack solutions
            that create real business impact.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Let's Work Together</span>
            <motion.svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
