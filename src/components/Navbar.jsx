"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import Chatbot from "@/components/Chatbot";

// Move constants outside component
const navLinks = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👩‍💻" },
  { id: "experience", label: "Experience", icon: "👨‍💼" },
  { id: "projects", label: "Work", icon: "🚀" },
  // { id: "skills", label: "Skills", icon: "⚡" },
  { id: "contact", label: "Contact", icon: "📧" },
];

const socialLinks = [
  {
    icon: <FiGithub />,
    href: "https://github.com/hinamurme",
    color: "hover:text-purple-400",
  },
  {
    icon: <FiLinkedin />,
    href: "https://linkedin.com/in/hinamurme",
    color: "hover:text-blue-400",
  },
  {
    icon: <FiMail />,
    href: "mailto:murmehina45@gmail.com",
    color: "hover:text-pink-400",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // Initialize dark mode from localStorage (only on client)
  useEffect(() => {
    setMounted(true);

    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      // Fallback to system preference if localStorage fails
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Toggle dark mode with error handling
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (error) {
        console.warn("Could not save theme preference:", error);
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (error) {
        console.warn("Could not save theme preference:", error);
      }
    }
  };

  // Mouse tracking for background glow (only when mounted)
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  // Scroll effect
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const currentSection = navLinks.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]); // Removed navLinks dependency since it's now constant

  // Prevent hydration mismatch - return null on server
  if (!mounted) return null;

  return (
    <>
      {/* Animated background glow - only show when mounted */}
      {mounted && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-40"
          animate={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-0"
            : "py-0"
        }`}
      >
        {/* Gradient accent line */}
        <motion.div
          className="hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Floating particles - only when mounted */}
        {mounted && (
          <div className="hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        <div className="w-full h-[68px] px-5 sm:px-8 lg:px-12 rounded-b-xl border-x border-b border-white/15 bg-[#030914]/95 backdrop-blur-xl shadow-xl">
          <div className="flex h-full items-center justify-between">
            {/* Logo with animated gradient */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="/about"
                onClick={() => setActiveSection("about")}
                className="relative z-10"
              >
                <div className="flex items-center gap-3">
                  {/* Logo icon */}
                  <motion.div
                    className="relative w-8 h-8 rotate-45 rounded-md border border-amber-300 bg-[#08101e] flex items-center justify-center"
                    animate={{ rotate: [45, 45] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span className="relative -rotate-45 text-[10px] font-bold text-amber-300">
                      HM
                    </span>
                  </motion.div>

                  {/* Text logo */}
                  <div className="flex flex-col">
                    <span className="font-serif text-xl font-semibold bg-gradient-to-r from-white via-white to-amber-300 bg-clip-text text-transparent">
                      Hina Murme
                    </span>
                    <motion.div
                      className="h-px bg-gradient-to-r from-amber-300 to-transparent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Center aligned */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  onMouseEnter={() => setIsHovered(link.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="relative"
                >
                  <Link
                    href={`/#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className="relative px-4 py-5 group"
                  >
                    {/* Animated scale layer */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        scale: isHovered === link.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Icon + Text */}
                    <div className="relative flex items-center gap-2">
                      {link.id === "home" && <motion.span
                        animate={{
                          scale: activeSection === link.id ? 1.2 : 1,
                          rotate:
                            activeSection === link.id ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-lg"
                      >
                        {link.icon}
                      </motion.span>}

                      <span
                        className={`font-medium ${
                          activeSection === link.id
                          ? "text-amber-300"
                          : "text-slate-300 group-hover:text-white"
                        } transition-colors duration-300`}
                      >
                        {link.label}
                      </span>
                    </div>

                    {/* Active underline */}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-1 left-4 right-4 h-px bg-amber-300 rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side - Social & CTA */}
            <div className="hidden lg:flex items-center">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-2 rounded-md bg-slate-950/50 backdrop-blur-sm border border-white/10 ${social.color} text-slate-300 hover:text-amber-200 transition-colors group`}
                  >
                    <div className="relative z-10">{social.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 rounded-lg group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

    
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.div className="lg:hidden" whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-12 h-12 flex flex-col items-center justify-center group"
                aria-label="Toggle menu"
              >
                {/* Animated hamburger */}
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="block w-6 h-0.5 bg-gradient-to-r from-cyan-300 to-purple-300 mb-1.5 transition-all duration-300"
                />
                <motion.span
                  animate={
                    isMenuOpen
                      ? { opacity: 0, width: 0 }
                      : { opacity: 1, width: 24 }
                  }
                  className="block h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 mb-1.5 transition-all duration-300"
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="block w-6 h-0.5 bg-gradient-to-r from-pink-300 to-cyan-300 transition-all duration-300"
                />

                {/* Button glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                <div className="absolute inset-0 rounded-xl border border-gray-700/50 group-hover:border-cyan-500/30 group-hover:border-purple-500/30 group-hover:border-pink-500/30 transition-all duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 py-6 bg-gradient-to-b from-gray-900/95 via-gray-900/98 to-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 mx-4">
                {/* Mobile menu gradient accent */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full" />

                <div className="flex flex-col space-y-2 px-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`/#${link.id}`}
                        className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                          activeSection === link.id
                            ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 border-purple-500/30 border-pink-500/30"
                            : "border border-gray-700/30 hover:border-cyan-500/30 hover:border-purple-500/30 hover:border-pink-500/30"
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveSection(link.id);
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: activeSection === link.id ? 1.2 : 1,
                          }}
                          className="text-xl"
                        >
                          {link.icon}
                        </motion.div>
                        <span
                          className={`flex-1 font-medium ${
                            activeSection === link.id
                              ? "text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {link.label}
                        </span>
                        {activeSection === link.id && (
                          <motion.div
                            layoutId="mobileActive"
                            className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Social links in mobile menu */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="flex justify-center gap-4 pt-6"
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: (navLinks.length + index) * 0.1 }}
                        whileHover={{ y: -3 }}
                        className={`p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${social.color} text-gray-300`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 }}
                    className="pt-6 px-4"
                  >
                    <Link
                      href="/#contact"
                      className="block px-6 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveSection("contact");
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>Get In Touch</span>
                        <motion.svg
                          className="h-5 w-5"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </div>
                    </Link>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: isScrolled ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
