"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiSmartphone,
  FiStar,
} from "react-icons/fi";

const projects = [
  {
    name: "Modern Portfolio Website",
    status: "Completed",
    description:
      "Responsive personal portfolio with smooth animations and interactive UI components.",
    image: "/Portfolio.png",
    tags: ["react", "tailwindcss", "framer-motion"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://hina-murme.vercel.app/" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/Hina-Murme.git" },
    ],
    imageLeft: false,
  },
  {
    name: "EWShopping – AI Multi-Vendor Marketplace",
    status: "Live",
    description:
      "Production platform with 3000+ sellers, 80K+ traffic. AI-powered search with load-balanced architecture.",
    image: "/Ewshopping.png",
    tags: ["next.js", "react.js", "node.js", "mongodb", "redis", "firebase-auth"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://ewshopping.com" },
      { label: "Play Store", icon: "playstore", url: "https://play.google.com/store/apps/details?id=com.ewsapp" },
    ],
    imageLeft: false,
  },
  {
    name: "TaskAdmin – Employee Management",
    status: "Completed",
    description:
      "Modern admin dashboard for managing employees, tasks, projects, and attendance.",
    image: "/TaskAdmin.png",
    tags: ["react", "dashboard", "employee-management"],
    links: [
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/EmployeeManagemetFrontend-.git" },
    ],
    imageLeft: false,
  },
  {
    name: "Foodside – Restaurant Panel",
    status: "Live",
    description:
      "Restaurant management with real-time order tracking, revenue analytics, and menu management.",
    image: "/RestaurantPanel.png",
    tags: ["react", "node.js", "mongodb", "analytics"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://restaurant-panel.foodside.co.in" },
    ],
    imageLeft: true,
  },
  {
    name: "EWShopping – Mobile App",
    status: "Live",
    description:
      "Android shopping app with location-based delivery, product discovery, and smooth navigation.",
    image: "/EwshoppingApp.png",
    tags: ["react-native", "firebase-auth", "redux", "android"],
    links: [
      { label: "Play Store", icon: "playstore", url: "https://play.google.com/store/apps/details?id=com.ewsapp" },
    ],
    imageLeft: true,
  },
  {
    name: "Grocify – Grocery Web App",
    status: "Completed",
    description:
      "Full-featured grocery shopping with product browsing, cart management, and API integration.",
    image: "/Grocify.png",
    tags: ["react", "node.js", "mongodb", "express"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://grocify-sigma.vercel.app/" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/Grocify.git" },
    ],
    imageLeft: true,
  },
  {
    name: "E-Commerce Platform",
    status: "Completed",
    description:
      "Full-stack MERN e-commerce with JWT authentication, cart management, and order processing.",
    image: "/E-com.png",
    tags: ["react", "node.js", "mongodb", "jwt-auth"],
    links: [
      { label: "Live Demo", icon: "live", url: "https://e-comm-five-lac.vercel.app/" },
      { label: "GitHub", icon: "github", url: "https://github.com/hinamurme/E-comm.git" },
    ],
    imageLeft: true,
  },
  {
    name: "Admin Dashboard",
    status: "Completed",
    description:
      "Secure admin panel for managing products, users, and orders with JWT authentication.",
    image: "/Admin.png",
    tags: ["react", "tailwindcss", "jwt-auth", "rest-api"],
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
    "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer border";

  if (link.icon === "live") {
    return (
      <button
        onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
        className={`${base} bg-gradient-to-r from-blue-500 to-violet-600 border-blue-400/50 text-white shadow-lg shadow-blue-950/30 hover:brightness-110`}
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
        className={`${base} bg-slate-950/40 border-slate-600/70 text-slate-100 hover:bg-slate-800/80 hover:border-slate-500`}
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
        className={`${base} bg-gradient-to-r from-emerald-500 to-cyan-600 border-emerald-400/50 text-white shadow-lg shadow-emerald-950/30 hover:brightness-110`}
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
      className="relative py-5 sm:py-7"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`overflow-hidden rounded-3xl border bg-[#081321]/90 p-4 shadow-2xl shadow-black/25 sm:p-6 lg:p-9 ${
          index % 2 === 0 ? "border-violet-500/75" : "border-cyan-500/65"
        }`}
      >
        <div
          className={`flex flex-col gap-6 lg:items-center ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } lg:gap-9`}
        >
          <motion.div
            className="w-full lg:w-[54%]"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950 shadow-xl shadow-black/40">
              <img
                src={project.image}
                alt={project.name}
                className="h-56 w-full object-cover object-top sm:h-72 lg:h-[22rem]"
                onError={(e) => {
                  e.target.parentElement.classList.add("flex", "h-56", "items-center", "justify-center");
                  e.target.style.display = "none";
                  const ph = document.createElement("span");
                  ph.className = "text-slate-500 text-sm";
                  ph.innerText = "Image not found";
                  e.target.parentElement.appendChild(ph);
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="flex w-full flex-col gap-4 lg:w-[46%]">
            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                statusColors[project.status] || statusColors.Completed
              }`}
            >
              <FiCheckCircle /> {project.status}
            </span>

            <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
              {project.name}
            </h3>

            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-700/60 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-200">
                {tag.replaceAll("-", " ")}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`mt-6 grid gap-3 ${
            project.links.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {project.links.map((link) => (
            <LinkButton key={link.label} link={link} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050d19] px-3 py-1 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-slate-700/70 bg-slate-950/15 px-4 py-0 sm:px-7 sm:py-12 lg:px-8">
        <motion.div
          className="mb-5 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2">
            <FiBriefcase className="text-blue-400" />
            <span className="text-sm font-medium text-violet-300">Projects</span>
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold sm:text-5xl">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mx-auto mb-5 flex max-w-xs items-center gap-3 text-blue-400">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500" />
            <FiStar className="shrink-0" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}