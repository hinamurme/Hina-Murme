"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiBriefcase,
  FiCheckCircle,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiServer,
} from "react-icons/fi";

export default function Experience() {
  // Experience Data - Only MERN Stack Developer Intern
  const experience = {
    id: 1,
    title: "MERN Stack Developer Intern",
    position: "Full-Stack Development Intern",
    company: "TechStart Solutions",
    period: "July 2024 - Present",
    duration: "6+ months",
    location: "Aurangabad, India (Hybrid)",
    description:
      "Working as a MERN Stack Developer Intern, contributing to full-stack web application development using modern technologies. Collaborating with senior developers to build scalable and efficient solutions.",
    responsibilities: [
      "Developed responsive user interfaces using React.js and Tailwind CSS",
      "Built and maintained RESTful APIs with Express.js and Node.js",
      "Implemented JWT-based authentication for secure user access",
      "Created MongoDB schemas and optimized database queries",
      "Integrated third-party APIs for enhanced functionality",
      "Used Git and GitHub for version control and team collaboration",
      "Debugged and resolved production issues efficiently",
      "Deployed applications on cloud platforms for client demos"
    ],
    achievements: [
      "Successfully delivered 5+ major features on time",
      "Improved API response time by 25% through optimization",
      "Received positive feedback from senior developers"
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", 
      "Tailwind CSS", "JWT", "Git", "Postman", "Vercel"
    ],
    icon: <FiCode />,
    color: "from-cyan-500 to-blue-500",
  };



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
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-wide">
              Professional Journey
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base max-w-2xl mx-auto"
          >
            Building scalable full-stack applications with the MERN stack
          </motion.p>
        </motion.div>

        {/* Experience Card - Centered Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line - Left side */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Icon */}
            <div className="absolute left-0 top-6 z-10 hidden md:block">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg shadow-cyan-500/20`}>
                <div className="text-white text-xl">{experience.icon}</div>
              </div>
            </div>

            {/* Content Card */}
            <div className="md:ml-16">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-cyan-300 font-medium">
                      {experience.position}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">{experience.duration}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex flex-wrap gap-4 mb-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="h-4 w-4 text-cyan-400" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="h-4 w-4 text-purple-400" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="h-4 w-4 text-pink-400" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                    <FiCheckCircle className="h-4 w-4 text-cyan-400" />
                    Key Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {experience.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="h-3.5 w-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <FiAward className="h-4 w-4 text-yellow-400" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-400 text-sm">🏆</span>
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <FiServer className="h-4 w-4 text-purple-400" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}