"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "E-Commerce Web Application",
      description:
        "A full-stack MERN-based e-commerce platform with secure JWT authentication, dynamic product listing, cart management, and order processing functionality. Built responsive UI using Tailwind CSS and Material-UI with complete frontend-backend integration.",
      github: "https://github.com/hinamurme/E-comm.git",
      demo: "https://e-comm-five-lac.vercel.app/",
      image: "/E-com.png",
    },

    {
      name: "Admin Dashboard Panel",
      description:
        "A secure admin dashboard built with React and Tailwind CSS for managing products, users, and orders. Integrated with REST APIs and JWT authentication to handle protected routes and CRUD operations efficiently.",
      github: "https://github.com/hinamurme/AdminWeb.git",
      demo: "https://admin-web-azure.vercel.app/login",
      image: "/Admin.png",
    },

    {
      name: "Grocify – Grocery Web Application",
      description:
        "A responsive grocery shopping web application built using the MERN stack. Users can browse products, manage cart functionality, and experience smooth backend API integration.",
      github: "https://github.com/hinamurme/Grocify.git",
      demo: "https://grocify-sigma.vercel.app/",
      image: "/Grocify.png",
    },

    {
      name: "Modern Portfolio Website",
      description:
        "A responsive and animated personal portfolio built using React and Tailwind CSS with smooth animations, interactive UI components, and modern design principles.",
      github: "https://github.com/hinamurme/PORTFOLIO1.git",
      demo: "https://hina-portfolio-eight.vercel.app/",
      image: "/Portfolio.png",
    },
  ];

  const filteredProjects = projects;

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
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Simplified click handler
  const handleLinkClick = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
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
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-cyan-300">My Work</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
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
            className="text-sm text-gray-400 max-w-2xl mx-auto px-4"
          >
            A collection of my recent work showcasing innovation, technical
            expertise, and attention to detail.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 sm:px-0"
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
                className="relative h-full rounded-xl overflow-hidden border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm"
                whileHover={{
                  y: -3,
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  
                  {/* Image Loading Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <motion.h3
                    className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors"
                    animate={{
                      scale: hoveredProject === project.name ? 1.01 : 1,
                    }}
                  >
                    {project.name}
                  </motion.h3>

                  <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Links - FIXED BUTTONS */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                      {/* GitHub Button - FIXED */}
                      <button
                        onClick={() => handleLinkClick(project.github)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs sm:text-sm bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/30 cursor-pointer"
                      >
                        <FiGithub className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="hidden xs:inline text-xs">Code</span>
                      </button>

                      {/* Live Demo Button - FIXED */}
                      <button
                        onClick={() => handleLinkClick(project.demo)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs sm:text-sm bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/20 border border-cyan-500/30 cursor-pointer"
                      >
                        <FiExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="hidden xs:inline text-xs">Live</span>
                      </button>
                    </div>

          
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
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