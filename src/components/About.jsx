"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiBookOpen,
  FiTrendingUp,
  FiAward,
  FiUsers,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiGlobe,
  FiGithub,
  FiLinkedin,
  FiBriefcase,
} from "react-icons/fi";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Technical Skills", icon: <FiCode /> },
    { id: "experience", label: "Experience", icon: <FiTrendingUp /> },
    { id: "education", label: "Education", icon: <FiAward /> },
  ];

  // Personal Information from Resume
  const personalInfo = {
    fullName: "Hina Murme",
    firstName: "Hina",
    lastName: "Murme",
    mobile: "+91 9284042371",
    email: "hina.murme@example.com",
    address: "Aurangabad, Maharashtra, India",
    nationality: "Indian",
    linkedin: "https://linkedin.com/in/hina-murme",
    github: "https://github.com/hina-murme",
  };

  // Languages from Resume
  const languages = [
    { name: "Hindi", level: "Fluent", color: "from-orange-400 to-red-500" },
    { name: "English", level: "Professional", color: "from-blue-400 to-cyan-500" },
    { name: "Marathi", level: "Fluent", color: "from-green-400 to-emerald-500" },
  ];


  // Education from Resume
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Dr. Babasaheb Ambedkar Marathwada University",
      location: "Aurangabad",
      year: "2021 - 2024",
      grade: "65.60%",
      icon: <FiBookOpen />,
      color: "from-purple-500 to-pink-500",
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

  return (
    <section
      id="about"
      className="py-12 sm:py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header - Made smaller */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-cyan-300">
              Get to Know Me
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
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
            className="text-gray-400 text-sm max-w-2xl mx-auto px-2"
          >
            Results-driven MERN Stack Developer passionate about building scalable, secure, and high-performance web applications
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column */}
          <motion.div
            className="space-y-5 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Personal Details Card */}
            <motion.div
              variants={itemVariants}
              className="p-5 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 p-1.5 rounded-lg">
                  <FiUser className="h-3.5 w-3.5" />
                </span>
                Personal Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FiUser className="text-cyan-400 text-sm" />
                    <div>
                      <p className="text-[11px] text-gray-500">Full Name</p>
                      <p className="text-sm font-medium">{personalInfo.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FiPhone className="text-purple-400 text-sm" />
                    <div>
                      <p className="text-[11px] text-gray-500">Mobile Number</p>
                      <p className="text-sm font-medium">{personalInfo.mobile}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FiMapPin className="text-pink-400 text-sm" />
                    <div>
                      <p className="text-[11px] text-gray-500">Address</p>
                      <p className="text-sm font-medium">{personalInfo.address}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FiMail className="text-cyan-400 text-sm" />
                    <div>
                      <p className="text-[11px] text-gray-500">Email</p>
                      <p className="text-sm font-medium break-all">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FiGlobe className="text-purple-400 text-sm" />
                    <div>
                      <p className="text-[11px] text-gray-500">Nationality</p>
                      <p className="text-sm font-medium">{personalInfo.nationality}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-4 pt-3 border-t border-gray-700/50">
                <h4 className="text-xs font-semibold text-white mb-2">Languages</h4>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang, index) => (
                    <span
                      key={index}
                      className={`px-2.5 py-0.5 text-xs rounded-full bg-gradient-to-r ${lang.color} bg-opacity-20 text-white border border-white/20`}
                    >
                      {lang.name} ({lang.level})
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-3 border-t border-gray-700/50">
                <h4 className="text-xs font-semibold text-white mb-2">Connect with Me</h4>
                <div className="flex gap-2">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <FiGithub className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all duration-300"
                  >
                    <FiLinkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 text-gray-400 hover:text-pink-400 transition-all duration-300"
                  >
                    <FiMail className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

     
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 sm:space-y-6"
          >
            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="p-5 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-lg">
                  <FiBookOpen className="h-3.5 w-3.5" />
                </span>
                Education
              </h3>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-3 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <div className="text-xs text-purple-300">
                      {edu.institution}, {edu.location}
                    </div>
                    <div className="text-xs text-gray-400">
                      {edu.year} | Grade: {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

  

            {/* What I Bring */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1.5 rounded-lg">
                  <FiUsers className="h-3.5 w-3.5" />
                </span>
                What I Bring
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                    className="p-2.5 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="text-sm font-semibold text-white">
                      {item.quality}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

    

      </div>
    </section>
  );
}