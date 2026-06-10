"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiSmartphone } from "react-icons/fi";

const projects = [

  
  {
    name: "Modern Portfolio Website",
    status: "Completed",
    description:
      "A responsive and animated personal portfolio built using React and Tailwind CSS with smooth animations, interactive UI components, and modern design principles.",
    image: "/Portfolio.png",
    tags: ["react", "tailwindcss", "framer-motion", "responsive-design", "animations"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://hina-murme.vercel.app/" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/Hina-Murme.git" },
    ],
    imageLeft: false,
  },
  
  {
    name: "EWShopping – AI Powered Enterprise Multi-Vendor Marketplace",
    status: "Live",
    description:
      "Production-grade multi-vendor marketplace platform handling 3000+ active sellers and 80,000+ traffic. Designed with scalable load-balanced architecture using Nginx and PM2 cluster mode. Integrated Firebase OTP-based mobile authentication and role-based access control. Built intelligent AI-driven search optimization with dynamic SEO rendering, advanced filtering engine, inventory management, and Redis caching.",
    image: "/Ewshopping.png",
    tags: ["next.js", "react.js", "node.js", "express.js", "mongodb", "mongoose", "redis", "firebase-auth", "otp-login", "jwt-auth", "role-based-access", "ai-search-optimization", "dynamic-seo", "ssr", "load-balancer", "nginx", "pm2", "multi-vendor-architecture", "stock-management", "order-management", "cdn", "cloudinary"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://ewshopping.com" },
      { label: "Play Store", icon: "playstore", url: "https://play.google.com/store/apps/details?id=com.ewsapp" },
    ],
    imageLeft: false,
  },
  {
    name: "Restaurant Panel – Foodside",
    status: "Live",
    description:
      "A comprehensive restaurant management dashboard built for Foodside. Features real-time order tracking, revenue analytics, menu management, earnings reports, and performance insights — all in a clean, data-rich interface.",
    image: "/RestaurantPanel.png",
    tags: ["react", "node.js", "mongodb", "rest-api", "jwt-auth", "dashboard", "analytics", "order-management"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://restaurant-panel.foodside.co.in" },
    ],
    imageLeft: true,
  },
   {
    name: "EWShopping – Mobile App",
    status: "Live",
    description:
      "The official Android app for EWShopping. Delivers a seamless mobile shopping experience with location-based delivery, product discovery, mega deals, women's fashion picks, and a smooth bottom-tab navigation for intuitive browsing on the go.",
    image: "/EwshoppingApp.png",
    tags: ["react-native", "firebase-auth", "otp-login", "redux", "rest-api", "location-services", "push-notifications", "android"],
    links: [
      { label: "Play Store", icon: "playstore", url: "https://play.google.com/store/apps/details?id=com.ewsapp" },
    ],
    imageLeft: true,
  },
    {
    name: "Grocify – Grocery Web Application",
    status: "Completed",
    description:
      "A responsive grocery shopping web application built using the MERN stack. Users can browse products, manage cart functionality, and experience smooth backend API integration.",
    image: "/Grocify.png",
    tags: ["react", "node.js", "mongodb", "express.js", "rest-api", "cart-management"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://grocify-sigma.vercel.app/" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/Grocify.git" },
    ],
    imageLeft: true,
  },
  {
    name: "E-Commerce Web Application",
    status: "Completed",
    description:
      "A full-stack MERN-based e-commerce platform with secure JWT authentication, dynamic product listing, cart management, and order processing functionality. Built responsive UI using Tailwind CSS and Material-UI with complete frontend-backend integration.",
    image: "/E-com.png",
    tags: ["react", "node.js", "mongodb", "express.js", "jwt-auth", "tailwindcss", "material-ui", "rest-api"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://e-comm-five-lac.vercel.app/" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/E-comm.git" },
    ],
    imageLeft: true,
  },
  {
    name: "Admin Dashboard Panel",
    status: "Completed",
    description:
      "A secure admin dashboard built with React and Tailwind CSS for managing products, users, and orders. Integrated with REST APIs and JWT authentication to handle protected routes and CRUD operations efficiently.",
    image: "/Admin.png",
    tags: ["react", "tailwindcss", "jwt-auth", "rest-api", "crud-operations", "protected-routes"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://admin-web-azure.vercel.app/login" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/AdminWeb.git" },
    ],
    imageLeft: false,
  },

];

const statusColors = {
  Completed: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10",
  Live: "border-green-500/50 text-green-300 bg-green-500/10",
};

function LinkButton({ link }) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border";

  if (link.icon === "live") {
    return (
      <button
        onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
        className={`${base} bg-cyan-500/10 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400`}
      >
        <FiExternalLink className="w-4 h-4" />
        {link.label}
      </button>
    );
  }
  if (link.icon === "github") {
    return (
      <button
        onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
        className={`${base} bg-gray-700/40 border-gray-600/50 text-gray-300 hover:bg-gray-700 hover:border-gray-500`}
      >
        <FiGithub className="w-4 h-4" />
        {link.label}
      </button>
    );
  }
  if (link.icon === "playstore") {
    return (
      <button
        onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
        className={`${base} bg-green-500/10 border-green-500/40 text-green-300 hover:bg-green-500/20 hover:border-green-400`}
      >
        <FiSmartphone className="w-4 h-4" />
        {link.label}
      </button>
    );
  }
  return null;
}

function ProjectRow({ project, index }) {
  const isLeft = project.imageLeft;

  return (
    <motion.div
      className="relative py-16 sm:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle divider line between projects */}
      {index !== 0 && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/60 to-transparent" />
      )}

      <div
        className={`flex flex-col ${
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-10 lg:gap-16 items-center`}
      >
        {/* Image Side */}
        <motion.div
          className="w-full lg:w-1/2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-800/30 shadow-2xl shadow-black/40">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 sm:h-72 md:h-80 object-cover object-top"
              onError={(e) => {
                e.target.parentElement.classList.add(
                  "flex",
                  "items-center",
                  "justify-center",
                  "h-64"
                );
                e.target.style.display = "none";
                const ph = document.createElement("span");
                ph.className = "text-gray-600 text-sm";
                ph.innerText = "Image not found";
                e.target.parentElement.appendChild(ph);
              }}
            />
            {/* Subtle inner glow overlay */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          {/* Status badge */}
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                statusColors[project.status] || statusColors["Completed"]
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800/80 border border-gray-700/60 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            {project.links.map((link) => (
              <LinkButton key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060b18] via-[#080d1f] to-[#060b18] relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-cyan-300">My Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            A collection of my recent work showcasing innovation, technical expertise, and attention to detail.
          </p>
        </motion.div>

        {/* Projects List */}
        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}