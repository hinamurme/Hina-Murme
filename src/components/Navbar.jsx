"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHome,
  FiUser,
  FiBriefcase,
  FiGrid,
  FiBookOpen,
  FiZap,
  FiFolder,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { FaCrown } from "react-icons/fa";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import Chatbot from "@/components/Chatbot";

// Move constants outside component
const navLinks = [
  {
    id: "home",
    label: "Home",
    icon: FiHome,
    accent: "#22d3ee",
  },
  {
    id: "blog",
    label: "Blog",
    icon: FiBookOpen,
    accent: "#a855f7",
  },
  {
    id: "experience",
    label: "Experience",
    icon: FiBriefcase,
    accent: "#ec4899",
  },
  {
    id: "projects",
    label: "Work",
    icon: FiFolder,
    accent: "#fbbf24",
  },
  {
    id: "skills",
    label: "Skills",
    icon: FiZap,
    accent: "#34d399",
  },
  {
    id: "contact",
    label: "Contact",
    icon: FiMail,
    accent: "#60a5fa",
  },
];

// Icons used for the mobile bottom navigation bar (matches the screenshot)
const mobileNavIcons = {
  home: <FiHome />,
  blog: <FiBookOpen />,
  experience: <FiBriefcase />,
  projects: <FiFolder />,
  skills: <FiZap />,
  contact: <FiMail />,
};

// Accent colors for the mobile pill nav — matches the reference screenshot
// exactly (Home + Work both use the same amber tone there).
const mobileAccents = {
  home: "#fbbf24",
  blog: "#a855f7",
  experience: "#ec4899",
  projects: "#fbbf24",
  skills: "#34d399",
  contact: "#60a5fa",
};

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isManualNav, setIsManualNav] = useState(false);
  const manualNavTimeoutRef = useRef(null);
  const initialScrollDoneRef = useRef(false);

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

  // Manual navigation handler - works for ALL links
  const handleNavClick = (id, e) => {
    // Prevent default if needed
    if (e) e.preventDefault();
    
    // Set manual navigation flag
    setIsManualNav(true);
    
    // Immediately update active section
    setActiveSection(id);
    
    // Clear any existing timeout
    if (manualNavTimeoutRef.current) {
      clearTimeout(manualNavTimeoutRef.current);
    }
    
    // Re-enable scroll-based detection after the scroll settles
    manualNavTimeoutRef.current = setTimeout(() => {
      setIsManualNav(false);
      manualNavTimeoutRef.current = null;
    }, 1200); // Slightly longer to ensure smooth transition
    
    // If we prevented default, manually navigate
    if (e) {
      const targetId = id;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL hash without causing scroll
      window.history.pushState(null, '', `/#${targetId}`);
    }
  };

  // Handle hash change from browser back/forward buttons
  useEffect(() => {
    if (!mounted) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navLinks.some(link => link.id === hash)) {
        // Don't set isManualNav for hash changes from user navigation
        // but update the active section
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [mounted]);

  // Scroll effect - UPDATED with manual nav check
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Skip scroll-based updates during manual navigation
      if (isManualNav) return;

      // Find which section is currently in view
      let foundSection = null;
      let minDistance = Infinity;
      
      for (const section of navLinks) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top - 100);
          
          // Check if section is in viewport
          if (rect.top <= 150 && rect.bottom >= 50) {
            if (distanceFromTop < minDistance) {
              minDistance = distanceFromTop;
              foundSection = section;
            }
          }
        }
      }

      // Fallback: if no section found, check which is closest to top
      if (!foundSection) {
        let closestSection = null;
        let closestDistance = Infinity;
        
        for (const section of navLinks) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < closestDistance && rect.bottom > 0) {
              closestDistance = distance;
              closestSection = section;
            }
          }
        }
        foundSection = closestSection;
      }

      if (foundSection) {
        setActiveSection(foundSection.id);
      }
    };

    // Initial check after mount
    const initialCheck = () => {
      if (!initialScrollDoneRef.current) {
        handleScroll();
        initialScrollDoneRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check immediately and after a small delay to ensure DOM is ready
    setTimeout(initialCheck, 100);
    initialCheck();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (manualNavTimeoutRef.current) {
        clearTimeout(manualNavTimeoutRef.current);
      }
    };
  }, [mounted, isManualNav]);

  // Update active section when URL hash changes (for all links)
  useEffect(() => {
    if (!mounted) return;
    
    const hash = window.location.hash.replace('#', '');
    if (hash && navLinks.some(link => link.id === hash)) {
      setActiveSection(hash);
    }
  }, [mounted]);

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
        {/* Gradient accent line - warm copper/amber sweep across the very top edge */}
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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

        <div className="w-full h-[68px] px-5 sm:px-8 lg:px-12  border-x border-b border-white/15 bg-[#030914]/95 backdrop-blur-xl shadow-xl">
          <div className="flex h-full items-center justify-between">
            {/* Logo with animated gradient */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="/#home"
                onClick={(e) => handleNavClick("home", e)}
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
                    onClick={(e) => handleNavClick(link.id, e)}
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
                      {link.id === "home" && (
                        <motion.span
                          animate={{
                            scale: activeSection === link.id ? 1.2 : 1,
                            rotate:
                              activeSection === link.id ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-lg"
                        >
                          <link.icon />
                        </motion.span>
                      )}

                      <motion.span
                        animate={{
                          color:
                            activeSection === link.id
                              ? link.accent
                              : isHovered === link.id
                              ? link.accent
                              : "#cbd5e1",
                        }}
                        transition={{ duration: 0.25 }}
                        className="font-medium"
                      >
                        {link.label}
                      </motion.span>
                    </div>

                    {/* Active underline */}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        animate={{ backgroundColor: link.accent }}
                        className="absolute bottom-1 left-4 right-4 h-px rounded-full"
                        style={{ boxShadow: `0 0 8px 0 ${link.accent}` }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side - Sparkle, divider, crown badge (matches screenshot) */}
            <div className="flex items-center gap-4">
              {/* Sparkle icon */}
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-amber-300 text-lg hidden sm:block"
              >
                <HiSparkles />
              </motion.div>

              {/* Vertical divider */}
              <div className="hidden sm:block w-px h-6 bg-white/15" />

              {/* Crown badge - circular border with glow, matches reference image */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-full border border-amber-300/70 bg-[#08101e] flex items-center justify-center cursor-pointer group"
              >
                {/* Ambient glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 6px 1px rgba(251,191,36,0.25)",
                      "0 0 12px 3px rgba(251,191,36,0.45)",
                      "0 0 6px 1px rgba(251,191,36,0.25)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <FaCrown className="relative z-10 text-amber-300 text-sm" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ============================================================ */}
      {/* Mobile bottom navigation — floating glass pill, pixel-matched */}
      {/* to the reference screenshot: colored dot per tab, colored     */}
      {/* icon per tab, colored underline per tab, and the active tab   */}
      {/* gets a soft rounded highlight box + a warm amber glow along   */}
      {/* the top edge of the pill.                                    */}
      {/* ============================================================ */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 w-full"
      >
        <div
          className="relative w-full rounded-t-[1px] border-t border-x border-white/10 bg-[#030914]/95 backdrop-blur-xl shadow-2xl overflow-hidden py-1"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Ambient amber glow hugging the top-left edge of the pill */}
          <motion.div
            className="pointer-events-none absolute -top-2 left-8 w-20 h-4 rounded-full bg-amber-300/60 blur-lg"
            animate={{ opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex items-center justify-around w-full px-1 sm:px-2 py-1 min-h-[52px]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const accent = mobileAccents[link.id] || link.accent;

              return (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className="relative flex-1"
                  aria-label={link.label}
                >
                  <motion.div
                    whileTap={{ scale: 0.92 }}
                    animate={{
                      backgroundColor: isActive
                        ? `${accent}1f`
                        : "rgba(255,255,255,0)",
                      borderColor: isActive ? `${accent}80` : "rgba(255,255,255,0)",
                      boxShadow: isActive
                        ? `0 0 14px 1px ${accent}40`
                        : "0 0 0px 0px rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center justify-center gap-[3px] py-1 px-0.5 rounded-2xl border"
                  >
                    {/* Colored dot above the icon */}
                    <motion.span
                      animate={{
                        boxShadow: isActive
                          ? `0 0 8px 2px ${accent}b3`
                          : "0 0 0px 0px transparent",
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-[5px] h-[5px] rounded-full"
                      style={{ backgroundColor: accent }}
                    />

                    {/* Icon — always tinted to its own accent color */}
                    <motion.div
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="text-lg leading-none"
                      style={{ color: accent }}
                    >
                      {mobileNavIcons[link.id]}
                    </motion.div>

                    {/* Label — colored only when active, muted otherwise */}
                    <motion.span
                      animate={{ color: isActive ? accent : "#94a3b8" }}
                      transition={{ duration: 0.25 }}
                      className="text-[9px] sm:text-[10px] font-medium tracking-wide whitespace-nowrap"
                    >
                      {link.label}
                    </motion.span>

                    {/* Colored underline beneath every label */}
                    <span
                      className="h-[2px] w-5 rounded-full"
                      style={{ backgroundColor: accent, opacity: isActive ? 1 : 0.55 }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
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