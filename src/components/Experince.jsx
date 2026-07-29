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
  FiTrendingUp,
} from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Project Engineer",
      company: "Dexterous Technology",
      period: "Aug 2025 – Present",
      duration: "1+ Year",
      location: "Hyderabad, India",
      description:
        "Full-stack developer building scalable MERN/Next.js applications with optimized performance and seamless third-party integrations.",
      responsibilities: [
        "Built responsive UIs with React.js, Next.js, Tailwind CSS, and Material UI",
        "Developed secure REST APIs with JWT/Firebase authentication and RBAC",
        "Integrated payment gateways (Razorpay, PayU) and third-party services",
        "Optimized performance using MongoDB indexing, Redis caching, and Nginx",
      ],
      achievements: [
        "Delivered 5+ production apps with 40% performance improvement",
        "Integrated multiple payment gateways and Google Maps API",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Firebase",
        "Redis",
        "AWS",
        "Git",
      ],
      icon: <FiCode />,
      color: "from-cyan-500 to-blue-500",
      isCurrent: true,
    },
    {
      id: 2,
      title: "Software Developer Intern",
      company: "Naresh i Technologies",
      period: "Feb 2025 – Jul 2025",
      duration: "6 Months",
      location: "Hyderabad, India",
      description:
        "Full-stack intern building web applications with Python, MySQL, and MongoDB, gaining hands-on experience in development and deployment.",
      responsibilities: [
        "Built full-stack apps using Python, MySQL, MongoDB, and JavaScript",
        "Developed REST APIs with CRUD operations and authentication",
        "Deployed applications and collaborated on real-world projects",
      ],
      achievements: [
        "Completed 3+ major projects",
        "Recognized for clean code and documentation",
      ],
      technologies: [
        "Python",
        "MySQL",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "Postman",
      ],
      icon: <FiTrendingUp />,
      color: "from-purple-500 to-pink-500",
      isCurrent: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="py-1 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">
              1+ Year Experience
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Mobile Timeline Dot */}
              <div className="absolute left-4 top-6 z-10 md:hidden">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg shadow-cyan-500/20`}
                >
                  <div className="text-white text-sm">{exp.icon}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pl-12 md:pl-0">
                <div
                  className={`p-4 rounded-2xl bg-gray-900/80 backdrop-blur-sm border transition-all duration-300 ${
                    exp.isCurrent
                      ? "border-cyan-500/40 hover:border-cyan-500/60 shadow-lg shadow-cyan-500/10"
                      : "border-gray-800/50 hover:border-cyan-500/30"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-white">
                            {exp.title}
                          </h3>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                              </span>
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-cyan-300">{exp.company}</p>
                      </div>
                      <span className="text-xs text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs">
                      <FiMapPin className="text-purple-400 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-2">
                      <FiCheckCircle className="text-cyan-400 flex-shrink-0" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 text-xs flex items-start gap-2"
                        >
                          <span className="text-cyan-400 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                      <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-2">
                        <FiAward className="text-yellow-400 flex-shrink-0" />
                        Achievements
                      </h4>
                      <ul className="space-y-0.5">
                        {exp.achievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-xs flex items-start gap-2"
                          >
                            <span className="text-yellow-400 flex-shrink-0">✦</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-2">
                      <FiServer className="text-purple-400 flex-shrink-0" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-cyan-500/50 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}