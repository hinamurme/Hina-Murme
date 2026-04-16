"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects", color: "from-cyan-500 to-purple-500" },
    { id: "web", label: "Web Apps", color: "from-blue-500 to-cyan-500" },
    {
      id: "data",
      label: "Data Analysis",
      color: "from-green-500 to-emerald-500",
    },
    { id: "system", label: "Systems", color: "from-orange-500 to-red-500" },
  ];

  const projects = [
    {
      name: "E-Commerce Web Application",
      description:
        "A full-stack MERN-based e-commerce platform with secure JWT authentication, dynamic product listing, cart management, and order processing functionality. Built responsive UI using Tailwind CSS and Material-UI with complete frontend-backend integration.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT Authentication",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material-UI",
        "REST API",
      ],
      github: "https://github.com/hinamurme/E-comm.git",
      demo: "https://e-comm-five-lac.vercel.app/",
      image: "/E-com.jpg",
      gradient: "from-cyan-500 to-blue-500",
    },

    {
      name: "Admin Dashboard Panel",
      description:
        "A secure admin dashboard built with React and Tailwind CSS for managing products, users, and orders. Integrated with REST APIs and JWT authentication to handle protected routes and CRUD operations efficiently.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "JWT Authentication",
        "REST API",
      ],
      github: "https://github.com/hinamurme/AdminWeb.git",
      demo: "https://admin-web-azure.vercel.app/login",
      image: "/Admin.jpg",
      gradient: "from-indigo-500 to-purple-500",
    },

    {
      name: "Grocify – Grocery Web Application",
      description:
        "A responsive grocery shopping web application built using the MERN stack. Users can browse products, manage cart functionality, and experience smooth backend API integration.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "REST API",
      ],
      github: "https://github.com/hinamurme/Grocify.git",
      demo: "https://grocify-sigma.vercel.app/",
      image: "/Grocery.jpg",
      gradient: "from-green-500 to-emerald-500",
    },

    {
      name: "Modern Portfolio Website",
      description:
        "A responsive and animated personal portfolio built using React and Tailwind CSS with smooth animations, interactive UI components, and modern design principles.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
      github: "https://github.com/hinamurme/PORTFOLIO1.git",
      demo: "https://hina-portfolio-eight.vercel.app/",
      image: "/Portfolio.jpg",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  // Since we removed category, show all projects regardless of filter
  const filteredProjects = projects;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Function to handle link clicks
  const handleLinkClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-cyan-300">
              My Work
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4"
          >
            A collection of my recent work showcasing innovation, technical
            expertise, and attention to detail.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <motion.div
                className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-cyan-500/10" />

                {/* Project Image/Background */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                  {/* Actual Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      // Fallback gradient will show through
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-40 mix-blend-overlay`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                  {/* Tech Stack Overlay */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-700">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-3 sm:p-4 md:p-6">
                  {/* Project Title */}
                  <motion.h3
                    className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors"
                    animate={{
                      scale: hoveredProject === project.name ? 1.02 : 1,
                    }}
                  >
                    {project.name}
                  </motion.h3>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Links - FIXED VERSION */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* GitHub Button */}
                      <motion.button
                        onClick={(e) => handleLinkClick(e, project.github)}
                        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-xs sm:text-sm ${
                          project.github === "#"
                            ? "bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700"
                            : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/30 cursor-pointer"
                        }`}
                        whileHover={{
                          scale: project.github !== "#" ? 1.05 : 1,
                        }}
                        whileTap={{ scale: project.github !== "#" ? 0.95 : 1 }}
                        disabled={project.github === "#"}
                      >
                        <FiGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden xs:inline">Code</span>
                      </motion.button>

                      {/* Live Demo Button */}
                      <motion.button
                        onClick={(e) => handleLinkClick(e, project.demo)}
                        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-xs sm:text-sm ${
                          project.demo === "#"
                            ? "bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700"
                            : "bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/20 border border-cyan-500/30 cursor-pointer"
                        }`}
                        whileHover={{
                          scale: project.demo !== "#" ? 1.05 : 1,
                        }}
                        whileTap={{ scale: project.demo !== "#" ? 0.95 : 1 }}
                        disabled={project.demo === "#"}
                      >
                        <FiExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden xs:inline">Live</span>
                      </motion.button>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-purple-500/30 transition-all cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        console.log(`View details for ${project.name}`);
                        // Add your details modal or navigation here
                      }}
                    >
                      <FiEye className="h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl"
                  initial={false}
                  animate={{
                    opacity: hoveredProject === project.name ? 1 : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}