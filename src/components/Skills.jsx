"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaReact, FaNodeJs, FaGitAlt,FaServer} from "react-icons/fa";
import { SiMui, SiJsonwebtokens, SiPostman } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { 
  SiTailwindcss, 
  SiMongodb, SiRedux, SiJavascript,
  SiExpress,SiMysql,SiPython, SiReact,  // For React Native (using React icon)
  SiHostinger
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
    icon: <FaReact className="w-5 h-5" />, 
    level: 85, 
    color: "text-cyan-400", 
    bgColor: "bg-cyan-900/30", 
    borderColor: "border-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    category: "frontend",
    description: "Building responsive UI with hooks, components, and state management"
  },
    { 
    name: "React Native", 
    icon: <FaReact className="w-5 h-5" />, 
    level: 75, 
    color: "text-cyan-400", 
    bgColor: "bg-cyan-900/20", 
    borderColor: "border-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    category: "frontend",
    description: "Cross-platform mobile app development for iOS and Android"
  },
  { 
    name: "JavaScript (ES6+)", 
    icon: <SiJavascript className="w-5 h-5" />, 
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
    icon: <SiRedux className="w-5 h-5" />, 
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
    icon: <SiTailwindcss className="w-5 h-5" />, 
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
    icon: <SiMui className="w-5 h-5" />, 
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
    icon: <FaNodeJs className="w-5 h-5" />, 
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
    icon: <SiExpress className="w-5 h-5" />, 
    level: 82, 
    color: "text-gray-400", 
    bgColor: "bg-gray-800/30", 
    borderColor: "border-gray-600/30",
    gradient: "from-gray-600 to-gray-800",
    category: "backend",
    description: "Middleware, routing, and backend architecture"
  },
  { 
    name: "Python", 
    icon: <SiPython className="w-5 h-5" />, 
    level: 85, 
    color: "text-yellow-400", 
    bgColor: "bg-yellow-900/20", 
    borderColor: "border-yellow-500/30",
    gradient: "from-yellow-500 to-blue-500",
    category: "backend",
    description: "Backend development, scripting, and data processing"
  },
  { 
    name: "JWT Authentication", 
    icon: <SiJsonwebtokens className="w-5 h-5" />, 
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
    icon: <FiLink className="w-5 h-5" />, 
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
    icon: <SiMongodb className="w-5 h-5" />, 
    level: 85, 
    color: "text-green-500", 
    bgColor: "bg-green-900/20", 
    borderColor: "border-green-600/30",
    gradient: "from-green-600 to-emerald-600",
    category: "databases",
    description: "NoSQL database, CRUD operations, and schema design"
  },
  { 
    name: "MySQL", 
    icon: <SiMysql className="w-5 h-5" />, 
    level: 80, 
    color: "text-blue-400", 
    bgColor: "bg-blue-900/20", 
    borderColor: "border-blue-500/30",
    gradient: "from-blue-500 to-indigo-500",
    category: "databases",
    description: "Relational database design, SQL queries, joins, and data analysis"
  },

  // Tools
  { 
    name: "Git & GitHub", 
    icon: <FaGitAlt className="w-5 h-5" />, 
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
    icon: <SiPostman className="w-5 h-5" />, 
    level: 80, 
    color: "text-orange-400", 
    bgColor: "bg-orange-900/20", 
    borderColor: "border-orange-500/30",
    gradient: "from-orange-500 to-amber-500",
    category: "tools",
    description: "API testing and debugging"
  },
   { 
    name: "Hostinger", 
    icon: <FaServer className="w-5 h-5" />, 
    level: 75, 
    color: "text-purple-400", 
    bgColor: "bg-purple-900/20", 
    borderColor: "border-purple-500/30",
    gradient: "from-purple-500 to-pink-500",
    category: "tools",
    description: "Web hosting, domain management, and server deployment"
  },

];

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Skill level animation
  const ProgressBar = ({ level, gradient }) => (
    <div className="relative w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} rounded-full`}
      />
    </div>
  );

  return (
    <section id="skills" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      
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
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-cyan-300">Technical Expertise</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
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
            className="text-sm text-gray-400 max-w-2xl mx-auto px-4"
          >
            Technologies and tools I work with to create amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `text-white bg-gradient-to-r ${category.color}`
                  : "text-gray-400 bg-gray-900/50 border border-gray-800 hover:border-gray-700"
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-20"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Classic Hover Design */}
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 sm:px-0"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative p-4 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden"
            >
              {/* Classic hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Dark overlay for better text contrast on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card content */}
              <div className="relative z-10">
                {/* Skill icon and percentage */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl bg-gray-800/80 group-hover:bg-white/10 transition-all duration-300 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <motion.div
                    animate={{ 
                      scale: hoveredSkill === skill.name ? 1.1 : 1,
                    }}
                    className={`text-lg font-bold ${skill.color} group-hover:text-white transition-colors duration-300`}
                  >
                    {skill.level}%
                  </motion.div>
                </div>

                {/* Skill name */}
                <h3 className={`text-base font-semibold mb-2 ${skill.color} group-hover:text-white transition-colors duration-300`}>
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="relative w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.gradient} rounded-full group-hover:shadow-lg transition-all duration-300`}
                  />
                </div>

                {/* Description - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                    y: hoveredSkill === skill.name ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-3" />
                  <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              </div>

              {/* Classic hover scale effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}