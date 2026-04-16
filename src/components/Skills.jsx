"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaReact, FaNodeJs, FaGitAlt} from "react-icons/fa";
import { SiMui, SiJsonwebtokens, SiPostman } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { 
  SiTailwindcss, 
  SiMongodb, SiRedux, SiJavascript,
  SiExpress,SiMysql
} from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill categories
  const categories = [
    { id: "all", label: "All Skills", color: "from-cyan-500 to-purple-500" },
    { id: "frontend", label: "Frontend", color: "from-blue-500 to-cyan-500" },
    { id: "backend", label: "Backend", color: "from-green-500 to-emerald-500" },
    { id: "tools", label: "Tools", color: "from-orange-500 to-red-500" },
    { id: "databases", label: "Databases", color: "from-purple-500 to-pink-500" },
  ];

  // Skills data with icons, levels, and categories
const skillsData = [
  // Frontend Skills
  { 
    name: "React.js", 
    icon: <FaReact className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 85, 
    color: "text-cyan-400", 
    bgColor: "bg-cyan-900/30", 
    borderColor: "border-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    category: "frontend",
    description: "Building responsive UI with hooks, components, and state management"
  },
  { 
    name: "JavaScript (ES6+)", 
    icon: <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 88, 
    color: "text-yellow-400", 
    bgColor: "bg-yellow-900/20", 
    borderColor: "border-yellow-500/30",
    gradient: "from-yellow-500 to-orange-500",
    category: "frontend",
    description: "Modern JavaScript, DOM manipulation, and async programming"
  },
  { 
    name: "Redux Toolkit", 
    icon: <SiRedux className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 80, 
    color: "text-purple-400", 
    bgColor: "bg-purple-900/20", 
    borderColor: "border-purple-500/30",
    gradient: "from-purple-500 to-violet-500",
    category: "frontend",
    description: "State management and centralized data flow"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 85, 
    color: "text-teal-400", 
    bgColor: "bg-teal-900/20", 
    borderColor: "border-teal-500/30",
    gradient: "from-teal-500 to-cyan-500",
    category: "frontend",
    description: "Responsive design using utility-first CSS framework"
  },
  { 
    name: "Material-UI (MUI)", 
    icon: <SiMui className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 80, 
    color: "text-blue-400", 
    bgColor: "bg-blue-900/20", 
    borderColor: "border-blue-500/30",
    gradient: "from-blue-500 to-indigo-500",
    category: "frontend",
    description: "Component-based UI development with MUI library"
  },

  // Backend Skills
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 85, 
    color: "text-green-400", 
    bgColor: "bg-green-900/20", 
    borderColor: "border-green-500/30",
    gradient: "from-green-500 to-emerald-500",
    category: "backend",
    description: "Server-side development and REST API creation"
  },
  { 
    name: "Express.js", 
    icon: <SiExpress className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 82, 
    color: "text-gray-400", 
    bgColor: "bg-gray-800/30", 
    borderColor: "border-gray-600/30",
    gradient: "from-gray-600 to-gray-800",
    category: "backend",
    description: "Middleware, routing, and backend architecture"
  },
  { 
    name: "JWT Authentication", 
    icon: <SiJsonwebtokens className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 80, 
    color: "text-pink-400", 
    bgColor: "bg-pink-900/20", 
    borderColor: "border-pink-500/30",
    gradient: "from-pink-500 to-rose-500",
    category: "backend",
    description: "Secure authentication and authorization system"
  },
  { 
    name: "REST API", 
    icon: <FiLink className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 85, 
    color: "text-cyan-400", 
    bgColor: "bg-cyan-900/20", 
    borderColor: "border-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    category: "backend",
    description: "Designing and integrating RESTful APIs"
  },

  // Database Skills
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 85, 
    color: "text-green-500", 
    bgColor: "bg-green-900/20", 
    borderColor: "border-green-600/30",
    gradient: "from-green-600 to-emerald-600",
    category: "databases",
    description: "NoSQL database, CRUD operations, and schema design"
  },

  // Tools
  { 
    name: "Git & GitHub", 
    icon: <FaGitAlt className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 85, 
    color: "text-orange-500", 
    bgColor: "bg-orange-900/20", 
    borderColor: "border-orange-600/30",
    gradient: "from-orange-600 to-red-500",
    category: "tools",
    description: "Version control and collaborative development"
  },
  { 
    name: "Postman", 
    icon: <SiPostman className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 80, 
    color: "text-orange-400", 
    bgColor: "bg-orange-900/20", 
    borderColor: "border-orange-500/30",
    gradient: "from-orange-500 to-amber-500",
    category: "tools",
    description: "API testing and debugging"
  },
  { 
    name: "MongoDB Compass", 
    icon: <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8" />, 
    level: 75, 
    color: "text-green-400", 
    bgColor: "bg-green-900/20", 
    borderColor: "border-green-500/30",
    gradient: "from-green-500 to-emerald-500",
    category: "tools",
    description: "Database visualization and management"
  },
  { 
  name: "MySQL", 
  icon: <SiMysql className="w-6 h-6 sm:w-8 sm:h-8" />, 
  level: 80, 
  color: "text-blue-400", 
  bgColor: "bg-blue-900/20", 
  borderColor: "border-blue-500/30",
  gradient: "from-blue-500 to-indigo-500",
  category: "databases",
  description: "Relational database design, SQL queries, joins, and data analysis"
},
];

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Skill level animation
  const ProgressBar = ({ level, gradient }) => (
    <div className="relative w-full h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden mt-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} rounded-full`}
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
    <section id="skills" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-cyan-300">Technical Expertise</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            Technologies and tools I work with to create amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `text-white bg-gradient-to-r ${category.color}`
                  : "text-gray-400 bg-gray-900/50 border border-gray-800 hover:border-gray-700"
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r opacity-20"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border ${skill.borderColor} ${skill.bgColor} backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Skill icon */}
              <div className="relative z-10 flex items-center justify-between mb-3 sm:mb-4">
                <div className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl ${skill.color} bg-gray-900/50`}>
                  {skill.icon}
                </div>
                <motion.div
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  animate={{ 
                    scale: hoveredSkill === skill.name ? 1.1 : 1,
                    color: hoveredSkill === skill.name ? skill.color : "#ffffff"
                  }}
                >
                  {skill.level}%
                </motion.div>
              </div>

              {/* Skill name */}
              <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 ${skill.color} relative z-10`}>
                {skill.name}
              </h3>

              {/* Progress bar */}
              <div className="relative z-10">
                <ProgressBar level={skill.level} gradient={skill.gradient} />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>

              {/* Description (shown on hover) */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  height: hoveredSkill === skill.name ? "auto" : 0
                }}
                transition={{ duration: 0.2 }}
                className="relative z-10 overflow-hidden"
              >
                <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                  {skill.description}
                </p>
              </motion.div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl border-2"
                style={{
                  borderImageSource: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  borderImageSlice: 1,
                }}
                animate={{
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Legend & Stats */}
    

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Always learning and expanding my skill set to stay at the forefront of web development
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-sm sm:text-base text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>View My Projects</span>
            <motion.svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}