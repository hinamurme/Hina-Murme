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
import { FiCode, FiLink, FiStar } from "react-icons/fi";
import { 
  SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiMysql, 
  SiVercel, SiBootstrap, SiHtml5, SiCss3, SiMongoose
} from "react-icons/si";

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function CircleSkill({ skill, index, isVisible }) {
  const dash = (skill.level / 100) * CIRCUMFERENCE;
  const proficiency = skill.level >= 85 ? "Expert" : "Advanced";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group flex min-w-0 w-full cursor-pointer flex-col items-center rounded-2xl border border-slate-700/75 bg-[#081322]/85 px-2 py-4 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-cyan-400/60 sm:px-5 sm:py-6"
      title={skill.description}
    >
      {/* Circle */}
      <div className="relative h-20 w-20 sm:h-36 sm:w-36">
        <svg className="h-full w-full -rotate-90 drop-shadow-[0_0_8px_rgba(139,92,246,0.55)]" viewBox="0 0 72 72">
          {/* Track */}
          <circle
            cx="36" cy="36" r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="3.5"
          />
          {/* Progress */}
          <motion.circle
            cx="36" cy="36" r={RADIUS}
            fill="none"
            stroke={`url(#skill-grad-${index})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={isVisible ? { strokeDashoffset: CIRCUMFERENCE - dash } : { strokeDashoffset: CIRCUMFERENCE }}
            transition={{ duration: 1.2, delay: index * 0.04 + 0.3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id={`skill-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon inside circle */}
        <div className={`absolute inset-0 flex items-center justify-center ${skill.color} transition-transform duration-200 group-hover:scale-110`}>
          <span className="text-2xl sm:text-4xl">{skill.icon}</span>
        </div>

        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-400/35 bg-[#0a1424] px-2 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-black/30 sm:px-3 sm:py-1 sm:text-sm">
          {skill.level}%
        </div>
      </div>

      <span className="mt-3 w-full break-words text-center text-xs font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-cyan-200 sm:text-base">
        {skill.name}
      </span>
      <span className={`mt-1 flex items-center gap-1 text-[10px] sm:text-sm ${proficiency === "Expert" ? "text-fuchsia-400" : "text-cyan-400"}`}>
        <i className="h-1.5 w-1.5 rounded-full bg-current" /> {proficiency}
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
      className="relative overflow-hidden bg-[#040c18] px-1 py-1 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-slate-700/70 bg-gradient-to-br from-slate-950/60 via-[#071323]/50 to-violet-950/20 px-4 py-9 sm:px-8 sm:py-11">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-slate-950/50 px-5 py-2 text-cyan-300">
            <FiCode className="text-lg" />
            <span className="text-base font-medium">Technical Expertise</span>
          </div>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="mx-auto mt-5 flex max-w-xs items-center gap-3 text-blue-400">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500" />
            <FiStar className="shrink-0" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500" />
          </div>

        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? `border-transparent bg-gradient-to-r ${cat.color} text-white shadow-lg shadow-cyan-950/50`
                  : "border-slate-700 bg-slate-950/45 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid — circles */}
        <motion.div
          layout
          className="grid min-w-0 grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
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
          className="mt-7 text-center text-xs text-slate-500"
        >
          {filtered.length} skill{filtered.length !== 1 ? "s" : ""}
        </motion.p>
      </div>
    </section>
  );
}
