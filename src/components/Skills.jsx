"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaReact, FaNodeJs, FaServer, FaFire, FaDatabase, FaCloud, FaPython
} from "react-icons/fa";
import { 
  SiMui, SiJsonwebtokens, SiPostman, SiFirebase, SiNextdotjs, SiOpenai, 
  SiLangchain, SiGoogle, SiGit, SiGithubactions, SiNetlify
} from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { 
  SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiMysql, 
  SiVercel, SiBootstrap, SiHtml5, SiCss3, SiMongoose
} from "react-icons/si";

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function CircleSkill({ skill, index, isVisible }) {
  const dash = (skill.level / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="flex flex-col items-center gap-1.5 group cursor-pointer"
      title={skill.description}
    >
      {/* Circle */}
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
          {/* Track */}
          <circle
            cx="36" cy="36" r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="4"
          />
          {/* Progress */}
          <motion.circle
            cx="36" cy="36" r={RADIUS}
            fill="none"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={isVisible ? { strokeDashoffset: CIRCUMFERENCE - dash } : { strokeDashoffset: CIRCUMFERENCE }}
            transition={{ duration: 1.2, delay: index * 0.04 + 0.3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon inside circle */}
        <div className={`absolute inset-0 flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
          <span className="text-xl">{skill.icon}</span>
        </div>

        {/* Percent badge on hover */}
        <div className="absolute -top-1 -right-1 bg-gray-900 border border-cyan-500/50 text-cyan-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {skill.level}%
        </div>
      </div>

      {/* Name */}
      <span className="text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors duration-200 text-center leading-tight max-w-[76px]">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all",       label: "All",        color: "from-cyan-500 to-purple-500" },
    { id: "languages", label: "Languages",  color: "from-red-500 to-orange-500" },
    { id: "frontend",  label: "Frontend",   color: "from-blue-500 to-cyan-500" },
    { id: "backend",   label: "Backend",    color: "from-green-500 to-emerald-500" },
    { id: "database",  label: "Databases",  color: "from-purple-500 to-pink-500" },
    { id: "ai-llm",    label: "AI & LLM",   color: "from-indigo-500 to-purple-500" },
    { id: "seo",       label: "SEO",        color: "from-yellow-500 to-orange-500" },
    { id: "devops",    label: "DevOps",     color: "from-blue-600 to-cyan-600" },
    { id: "tools",     label: "Tools",      color: "from-gray-600 to-gray-800" },
  ];

  const skillsData = [
    { name: "JavaScript",    icon: <SiJavascript />,    level: 88, color: "text-yellow-400", category: "languages", description: "Modern JS, async, ES6+" },
    { name: "Python",        icon: <FaPython />,         level: 85, color: "text-blue-400",   category: "languages", description: "Backend, AI/LLM, scripting" },
    { name: "SQL",           icon: <FaDatabase />,       level: 82, color: "text-orange-400", category: "languages", description: "Queries, joins, DB management" },
    { name: "React.js",      icon: <FaReact />,          level: 85, color: "text-cyan-400",   category: "frontend",  description: "Hooks, components, state" },
    { name: "Next.js",       icon: <SiNextdotjs />,      level: 80, color: "text-white",      category: "frontend",  description: "SSR, SSG, full-stack React" },
    { name: "HTML5",         icon: <SiHtml5 />,          level: 90, color: "text-orange-400", category: "frontend",  description: "Semantic markup" },
    { name: "CSS3",          icon: <SiCss3 />,           level: 85, color: "text-blue-400",   category: "frontend",  description: "Animations, responsive layouts" },
    { name: "Tailwind CSS",  icon: <SiTailwindcss />,    level: 85, color: "text-teal-400",   category: "frontend",  description: "Utility-first CSS" },
    { name: "MUI",           icon: <SiMui />,            level: 80, color: "text-blue-400",   category: "frontend",  description: "Component-based UI" },
    { name: "Bootstrap",     icon: <SiBootstrap />,      level: 82, color: "text-purple-400", category: "frontend",  description: "Responsive design" },
    { name: "Node.js",       icon: <FaNodeJs />,         level: 85, color: "text-green-400",  category: "backend",   description: "Server-side JS runtime" },
    { name: "Express.js",    icon: <SiExpress />,        level: 82, color: "text-gray-400",   category: "backend",   description: "API development" },
    { name: "REST APIs",     icon: <FiLink />,           level: 85, color: "text-cyan-400",   category: "backend",   description: "RESTful services" },
    { name: "JWT Auth",      icon: <SiJsonwebtokens />,  level: 85, color: "text-pink-400",   category: "backend",   description: "Auth & authorization" },
    { name: "OTP Verify",    icon: <FaFire />,           level: 80, color: "text-yellow-400", category: "backend",   description: "OTP verification systems" },
    { name: "Firebase Auth", icon: <SiFirebase />,       level: 85, color: "text-orange-400", category: "backend",   description: "User auth & authorization" },
    { name: "MongoDB",       icon: <SiMongodb />,        level: 85, color: "text-green-500",  category: "database",  description: "NoSQL database" },
    { name: "Mongoose",      icon: <SiMongoose />,       level: 82, color: "text-red-400",    category: "database",  description: "MongoDB ODM" },
    { name: "MySQL",         icon: <SiMysql />,          level: 80, color: "text-blue-400",   category: "database",  description: "Relational database" },
    { name: "Firestore",     icon: <SiFirebase />,       level: 82, color: "text-yellow-500", category: "database",  description: "Real-time NoSQL" },
    { name: "OpenAI API",    icon: <SiOpenai />,         level: 85, color: "text-emerald-400",category: "ai-llm",    description: "GPT integration" },
    { name: "LangChain",     icon: <SiLangchain />,      level: 78, color: "text-green-400",  category: "ai-llm",    description: "LLM orchestration" },
    { name: "RAG",           icon: <FaDatabase />,       level: 75, color: "text-purple-400", category: "ai-llm",    description: "Retrieval-Augmented Gen" },
    { name: "Prompt Eng.",   icon: <SiOpenai />,         level: 85, color: "text-blue-400",   category: "ai-llm",    description: "Crafting effective prompts" },
    { name: "Generative AI", icon: <FaCloud />,          level: 80, color: "text-indigo-400", category: "ai-llm",    description: "Content generation" },
    { name: "Technical SEO", icon: <SiGoogle />,         level: 80, color: "text-green-400",  category: "seo",       description: "Website search optimization" },
    { name: "Search Console",icon: <SiGoogle />,         level: 78, color: "text-blue-400",   category: "seo",       description: "SEO performance tracking" },
    { name: "Schema Markup", icon: <SiGoogle />,         level: 75, color: "text-yellow-400", category: "seo",       description: "JSON-LD structured data" },
    { name: "GitHub Actions",icon: <SiGithubactions />,  level: 78, color: "text-blue-400",   category: "devops",    description: "CI/CD workflows" },
    { name: "CI/CD",         icon: <SiGithubactions />,  level: 75, color: "text-purple-400", category: "devops",    description: "Automated build & deploy" },
    { name: "Git & GitHub",  icon: <SiGit />,            level: 85, color: "text-orange-500", category: "tools",     description: "Version control" },
    { name: "Postman",       icon: <SiPostman />,        level: 80, color: "text-orange-400", category: "tools",     description: "API testing" },
    { name: "Vercel",        icon: <SiVercel />,         level: 85, color: "text-white",      category: "tools",     description: "Frontend deployment" },
    { name: "Netlify",       icon: <SiNetlify />,        level: 82, color: "text-teal-400",   category: "tools",     description: "Automated deployments" },
    { name: "Hostinger",     icon: <FaServer />,         level: 75, color: "text-purple-400", category: "tools",     description: "Web hosting" },
    { name: "Firebase Host", icon: <SiFirebase />,       level: 80, color: "text-yellow-400", category: "tools",     description: "Static & dynamic hosting" },
  ];

  const filtered = activeCategory === "all"
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-cyan-300">Technical Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Full-stack development · AI integration · SEO optimization
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-1.5 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : "text-gray-500 bg-gray-900/60 border border-gray-800 hover:text-gray-300 hover:border-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid — circles */}
        <motion.div
          layout
          className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-x-4 gap-y-6 justify-items-center"
        >
          {filtered.map((skill, i) => (
            <CircleSkill
              key={skill.name}
              skill={skill}
              index={i}
              isVisible={true}
            />
          ))}
        </motion.div>

        {/* Count badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-gray-600 mt-6"
        >
          {filtered.length} skill{filtered.length !== 1 ? "s" : ""} · hover to see proficiency
        </motion.p>
      </div>
    </section>
  );
}