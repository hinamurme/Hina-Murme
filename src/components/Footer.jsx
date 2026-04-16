"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHeart, FaGithub, FaLinkedin, FaFileAlt, FaArrowUp } from "react-icons/fa";
import { FiMail, FiCoffee } from "react-icons/fi";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [particleCount, setParticleCount] = useState(4);

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
    
    // Set particle count based on window width
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 640 ? 4 : 8);
    };
    
    updateParticleCount();
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateParticleCount);
      handleScroll();
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateParticleCount);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

const socialLinks = [
  { 
    icon: <FaGithub />, 
    label: "GitHub", 
    href: "https://github.com/hinamurme", 
    color: "hover:text-purple-400", 
    bgColor: "hover:bg-purple-500/10" 
  },
  { 
    icon: <FaLinkedin />, 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/hinamurme", 
    color: "hover:text-blue-400", 
    bgColor: "hover:bg-blue-500/10" 
  },
  { 
    icon: <FiMail />, 
    label: "Email", 
    href: "mailto:murmehina45@gmail.com", 
    color: "hover:text-pink-400", 
    bgColor: "hover:bg-pink-500/10" 
  },
  { 
    icon: <FaFileAlt />, 
    label: "Resume", 
    href: "/HinaMurme.pdf", 
    color: "hover:text-green-400", 
    bgColor: "hover:bg-green-500/10" 
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3, type: "spring" }
    }
  };

  // Don't render scroll-dependent elements until mounted
  if (!mounted) {
    return (
      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800/50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Basic footer structure without animations that depend on viewport */}
            <div className="text-center text-gray-400">
              Loading footer...
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <>
      {/* Scroll to Top Button - Responsive */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </motion.button>

      {/* Footer Section */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800/50">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,rgba(255,255,255,0.03)_1px)] bg-[size:100%_20px] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 sm:space-y-10 md:space-y-12"
          >
            {/* Top Section - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Logo & Description */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0.5 sm:inset-1 rounded-lg bg-gray-900"></div>
                    <span className="relative text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                      HM
                    </span>
                  </motion.div>
                  <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Hina Murme
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Full Stack MERN Developer specializing in building scalable web applications 
                  with secure authentication, RESTful APIs, and responsive UI design. 
                  Passionate about transforming ideas into real-world digital solutions.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 sm:gap-2 group"
                      >
                        <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </span>
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["React", "Next.js", "Node.js", "MongoDB", "Tailwind"].map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800/50 text-gray-300 text-xs rounded-lg border border-gray-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">Let's Connect</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Have a project in mind? Let's discuss how we can bring your ideas to life.
                </p>
                <motion.a
                  href="mailto:murmehina45@gmail.com"
                  className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-300 text-xs sm:text-sm rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">murmehina45@gmail.com</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
            />

            {/* Middle Section - Social Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-4 sm:mb-6">Follow My Journey</h4>
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    onMouseEnter={() => setHoveredIcon(social.label)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    className={`relative p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gray-900/50 border border-gray-800 ${social.color} ${social.bgColor} transition-all duration-300 group`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="relative z-10 text-sm sm:text-base md:text-lg">{social.icon}</div>
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
                      animate={{
                        opacity: hoveredIcon === social.label ? 1 : 0,
                        y: hoveredIcon === social.label ? 0 : 10
                      }}
                    >
                      {social.label}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rotate-45"></div>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
            />

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4"
            >
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2">
                  <span>© {currentYear} Hina Murme. All rights reserved.</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    Built with 
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaHeart className="text-red-500 h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.span>
                    and
                    <motion.span
                      animate={{ rotate: [0, 15, 0, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiCoffee className="text-amber-500 h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.span>
                  </span>
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-3 sm:gap-4 md:gap-6">
                {["Privacy", "Terms", "Sitemap"].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-500 hover:text-cyan-300 text-xs sm:text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Mobile */}
              <motion.button
                className="md:hidden px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 text-gray-400 text-xs sm:text-sm rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Top
              </motion.button>
            </motion.div>

            {/* Final Message */}
            <motion.div
              variants={itemVariants}
              className="text-center pt-4 sm:pt-6 border-t border-gray-800/50"
            >
              <p className="text-gray-500 text-xs sm:text-sm px-2">
                "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
              </p>
              <p className="text-gray-600 text-xs mt-1 sm:mt-2">- Patrick McKenzie</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles - Fixed for SSR */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(particleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-cyan-400/20 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        )}
      </footer>
    </>
  );
}