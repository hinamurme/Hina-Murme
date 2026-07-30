"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Move constants outside component
const roles = [
  "Project Engineer",
  "Full Stack Developer",
  "MERN Stack Specialist",
  "AI/LLM Integration Engineer",
  "Cloud & DevOps Enthusiast",
  "UI/UX Responsive Designer",
  "SEO & Performance Optimizer"
];

// Resume data for AI Assistant
const RESUME_DATA = {
  name: "Hina Murme",
  role: "Project Engineer (Full Stack Developer)",
  roles: [
    "Project Engineer",
    "Full Stack Developer",
    "MERN Stack Specialist",
    "AI/LLM Integration Engineer",
    "Cloud & DevOps Enthusiast",
    "UI/UX Responsive Designer",
    "SEO & Performance Optimizer"
  ],
  experience: "1+ year",
  email: "murmehina45@gmail.com",
  phone: "+91-9284042371",
  location: "Hyderabad, India",
  skills: [
    "JavaScript (ES6+)",
    "Python",
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Ant Design",
    "Material UI (MUI)",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Firebase (Firestore, Realtime Database)",
    "JWT Authentication",
    "Firebase Authentication",
    "OTP Verification",
    "RBAC",
    "Razorpay",
    "PayU",
    "HDFC SmartGateway",
    "OpenAI API",
    "AI Chatbot",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "MongoDB Compass",
    "Redis",
    "PM2",
    "Nginx",
    "AWS (EC2, S3)",
    "Vercel",
    "Firebase Hosting",
    "Hostinger",
  ],
  experience_details: [
    {
      title: "Project Engineer (Full Stack Developer)",
      company: "Dexterous Technology",
      location: "Hyderabad",
      period: "Aug 2025 – Present",
      responsibilities: [
        "Developed scalable full-stack web applications using MERN Stack and Next.js.",
        "Built responsive user interfaces with React.js, Tailwind CSS, Bootstrap, Ant Design, and Material UI.",
        "Designed secure REST APIs, authentication (JWT/Firebase), and role-based access control (RBAC).",
        "Developed and maintained EW Shopping, Grocery Website, Food Delivery Platform, Employee Task Management System, and Admin Panels.",
        "Integrated Shiprocket, Razorpay, PayU, Firebase, Google Maps API, and other third-party services.",
        "Optimized application performance using MongoDB indexing, Redis caching, PM2, and Nginx.",
        "Managed deployment, testing, and version control using AWS, Git, GitHub, Postman, Vercel, and Hostinger.",
        "Collaborated with cross-functional teams to deliver scalable, secure, and production-ready applications.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Naresh i Technologies",
      location: "Hyderabad",
      period: "Feb 2025 – Jul 2025",
      responsibilities: [
        "Built full-stack web applications using Python, MySQL, HTML, CSS, JavaScript, Basic AI, and MongoDB.",
        "Developed REST APIs, CRUD operations, authentication, and responsive user interfaces.",
        "Worked with Git, GitHub, and Postman for development, testing, and debugging.",
        "Gained hands-on experience in developing and deploying real-world web applications.",
      ],
    },
  ],
  projects: [
    {
      name: "EW Shopping – AI-Powered Multi-Vendor Marketplace",
      tech: "Next.js, React.js, Node.js, Express.js, MongoDB, Redis",
      details: [
        "Developed Customer Website, Seller Panel, and Admin Panel.",
        "Built product, category, order, coupon, wallet, and inventory management.",
        "Integrated Shiprocket, Razorpay, Firebase OTP, and AI-powered product search.",
        "Optimized application performance using Redis, PM2, and Nginx.",
      ],
    },
    {
      name: "Grocery E-Commerce Website",
      tech: "React.js, Node.js, Express.js, MongoDB",
      details: [
        "Developed a complete online grocery shopping platform.",
        "Implemented product catalog, cart, wishlist, checkout, and order management.",
        "Built secure user authentication and responsive UI.",
      ],
    },
    {
      name: "Food Delivery Platform",
      tech: "React.js, Node.js, MongoDB, Socket.IO",
      details: [
        "Developed customer website and admin dashboard.",
        "Implemented restaurant, menu, order, delivery, and payment management.",
        "Added real-time order tracking using Socket.IO.",
      ],
    },
    {
      name: "Employee Task Management System",
      tech: "React.js, Node.js, Express.js, MongoDB",
      details: [
        "Built task assignment and employee management system.",
        "Developed Admin Panel with task tracking, reports, and role-based access control.",
      ],
    },
    {
      name: "Admin Management Panel",
      tech: "React.js, Node.js, Express.js, MongoDB",
      details: [
        "Developed centralized dashboard for managing users, products, orders, reports, and analytics.",
        "Implemented RBAC, authentication, and responsive user interface.",
      ],
    },
    {
      name: "Additional Projects",
      tech: "Next.js, React.js, Tailwind CSS, OpenAI API, Firebase",
      details: [
        "Personal Portfolio Website - Next.js, React.js, Tailwind CSS, SEO, Vercel",
        "AI Website Assistant (Chatbot) - OpenAI API, React.js, Node.js",
        "Realtime Chat Application - Firebase Firestore, Firebase Authentication",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    university: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad",
    percentage: "65.60%",
  },
  portfolio: "https://hina-murme.vercel.app/",
  github: "https://github.com/hinamurme",
  linkedin: "https://www.linkedin.com/in/hina-murme/",
};

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const GROQ_API_URL = process.env.NEXT_PUBLIC_GROQ_API_URL;

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Role cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initialize floating particles with connections
  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];
    const colors = ["#FF6B9D", "#4D96FF", "#6BCF7F", "#FFD166", "#A277FF"];

    // Mouse position for particle interaction
    let mouse = { x: null, y: null, radius: 150 };

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.density = Math.random() * 30 + 1;
      }

      update() {
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;

            this.x -= directionX * force * 2;
            this.y -= directionY * force * 2;
          }
        }

        // Wrap around edges instead of bounce
        if (this.x > canvas.width) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = canvas.width;
        }
        if (this.y > canvas.height) {
          this.y = 0;
        } else if (this.y < 0) {
          this.y = canvas.height;
        }

        // Natural movement
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Calculate particle count based on screen size
    const calculateParticleCount = () => {
      if (window.innerWidth < 640) return 30;
      if (window.innerWidth < 1024) return 45;
      return Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));
    };

    // Create particles
    const createParticles = () => {
      particles.length = 0;
      const count = calculateParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    // Draw connections between particles
    function drawConnections() {
      const maxDistance = window.innerWidth < 640 ? 70 : 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrame;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    // Mouse move handler for canvas
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [mounted]);

  // Mouse position for interactive effects
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section
        id="home"
        className="flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center text-gray-400">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="home"
        className="relative flex  items-center justify-center
  bg-[#030914]
  pt-20 sm:pt-0 lg:pt-20
  pb-0
  px-4 sm:px-6 lg:px-8
  overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20"></div>

          {/* Animated gradient orbs - hidden on mobile for performance */}
          <motion.div
            className="hidden sm:block absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="hidden sm:block absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
        </div>

        {/* Interactive Canvas Particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-20 sm:opacity-30"
        />

        {/* Mouse interaction glow - hidden on mobile */}
        <motion.div
          className="hidden md:block fixed pointer-events-none z-0"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-10  lg:gap-16 items-center">
            {/* LEFT - Profile Image */}
            <div className="hidden lg:flex lg:order-1 justify-start">
              <ProfileImage mounted={mounted} />
            </div>

            {/* RIGHT - Content */}
            <div className="order-1 lg:order-2 space-y-5 text-center lg:text-left">
              <div className="flex justify-center pt-1 lg:hidden">
                <ProfileImage mounted={mounted} />
              </div>

              {/* Greeting with glowing text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="text-sm font-mono bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                  ✨ Welcome to my portfolio
                </span>
              </motion.div>

              {/* Hero Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
                  Hina Murme
                </span>
              </motion.h1>

              {/* Animated role */}
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {roles[currentRole]}
                </span>
              </motion.div>

              {/* Description */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  <p className="text-base sm:text-lg text-slate-300 leading-8 max-w-2xl mx-auto lg:mx-0">
    <span className="text-cyan-300 font-medium">Full-stack Project Engineer</span>{" "}
    crafting scalable web apps with <span className="text-purple-300 font-medium">MERN</span>, 
    <span className="text-cyan-300 font-medium"> Next.js</span>, and{" "}
    <span className="text-pink-300 font-medium">AI</span>. Focused on clean code, 
    performance, and seamless user experiences.
  </p>
</motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-row gap-3 pt-2 justify-center lg:justify-start w-full"
              >
                {/* AI Assistant Button */}
                <motion.button
                  onClick={() => setIsChatOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex-1 min-w-0 px-3 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm text-white text-xs sm:text-base font-semibold overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>

                    <span className="truncate">🤖 AI Assistant</span>
                  </div>
                </motion.button>

                {/* Download Resume Button */}
                <motion.a
                  href="/HinaMurme_Resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex-1 min-w-0 px-3 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs sm:text-base font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-0 left-0 w-full h-1 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <div className="relative flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>

                    <span className="truncate">Download Resume</span>
                  </div>
                </motion.a>
              </motion.div>

              <div className="grid grid-cols-3 gap-2 pt-2  lg:hidden text-center text-[10px] text-slate-300">
                <div>
                  <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg border border-purple-400/30 text-sm text-purple-300">
                    &lt;/&gt;
                  </span>
                  Clean Code
                </div>
                <div>
                  <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg border border-amber-300/30 text-sm text-amber-300">
                    ⚡
                  </span>
                  Performance
                </div>
                <div>
                  <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 text-sm text-cyan-300">
                    ▯
                  </span>
                  Responsive
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Component */}
      {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
    </>
  );
}

// Profile Image Component - Responsive with animated glowing border
function ProfileImage({ mounted }) {
  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative"
    >
      <div className="relative w-36 h-36 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
        {/* Floating gradient orbs behind image */}
        <motion.div
          className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-40"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-40"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Main Profile Circle */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-300/70 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl ">
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Image
              src="/pic.png"
              alt="Hina Murme"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// AI Chatbot Component (amber/dark theme, with timestamps)
function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input, time: formatTime() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `You are Hina Murme's portfolio assistant. ONLY provide real information about Hina based on the resume data provided below. Keep responses friendly, concise (under 3 sentences), and professional. Only answer based on this information. If asked something not in the resume, politely say you only have information from the resume.

RESUME DATA:
Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.role}
Experience: ${RESUME_DATA.experience}
Email: ${RESUME_DATA.email}
Phone: ${RESUME_DATA.phone}
Location: ${RESUME_DATA.location}

Skills: ${RESUME_DATA.skills.join(", ")}

Experience:
${RESUME_DATA.experience_details
  .map(
    (exp) =>
      `- ${exp.title} at ${exp.company} (${exp.period})
   Responsibilities: ${exp.responsibilities.join(" ")}`,
  )
  .join("\n")}

Projects:
${RESUME_DATA.projects
  .map(
    (proj) =>
      `- ${proj.name}
   Tech: ${proj.tech}
   Details: ${proj.details.join(" ")}`,
  )
  .join("\n")}

Education: ${RESUME_DATA.education.degree} from ${RESUME_DATA.education.university}, Percentage: ${RESUME_DATA.education.percentage}

Portfolio: ${RESUME_DATA.portfolio}
GitHub: ${RESUME_DATA.github}
LinkedIn: ${RESUME_DATA.linkedin}`,
            },
            {
              role: "user",
              content: input,
            },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const botReply =
        data.choices[0]?.message?.content ||
        "Sorry, I couldn't process that request.";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply, time: formatTime() },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Connection issue. Please check your API key or try again later.",
          time: formatTime(),
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100%-2rem)] sm:w-96 bg-[#0b1220] shadow-2xl rounded-2xl overflow-hidden z-50 border border-amber-500/20"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400/60 bg-amber-400/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base leading-tight">
                AI Assistant
              </h3>
              <p className="text-xs text-slate-400 leading-tight">
                Portfolio Assistant
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-[#0b1220]">
          {messages.length === 0 && (
            <div className="text-center text-slate-400 text-sm mt-8 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full border-2 border-amber-400/60 bg-amber-400/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="font-medium text-slate-200">
                Hi! I'm Hina's AI Assistant
              </p>
              <p className="text-xs text-slate-500">
                Powered by GROQ Llama 3.1
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-amber-300">
                  Skills
                </span>
                <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-amber-300">
                  Projects
                </span>
                <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-amber-300">
                  Experience
                </span>
                <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-amber-300">
                  Contact
                </span>
              </div>
            </div>
          )}

          {messages.map((msg, i) =>
            msg.sender === "user" ? (
              <div key={i} className="flex flex-col items-end">
                <div className="px-4 py-2.5 rounded-2xl rounded-br-sm text-sm max-w-[85%] bg-slate-700 text-white whitespace-pre-wrap">
                  {msg.text}
                </div>
                <span className="flex items-center gap-1 text-[10px] text-slate-500 mt-1 mr-1">
                  {msg.time}
                  <svg
                    className="w-3 h-3 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </div>
            ) : (
              <div key={i} className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full border border-amber-400/50 bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm max-w-[85%] bg-slate-800/80 border border-slate-700 text-slate-100 whitespace-pre-wrap">
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 ml-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            ),
          )}

          {loading && (
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full border border-amber-400/50 bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 px-4 py-2.5 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-amber-500/20 bg-[#0b1220]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2 bg-slate-800/70 border border-slate-700 rounded-full px-3 py-2 focus-within:border-amber-500/50 transition-colors"
          >
            <svg
              className="w-4 h-4 text-slate-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <input
              type="text"
              inputMode="text"
              enterKeyHint="send"
              autoComplete="off"
              autoCorrect="on"
              className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-slate-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Hina..."
              onKeyDown={(e) => {
                // Avoid firing on IME composition (important for non-English keyboards)
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-lg bg-amber-400 hover:bg-amber-300 flex items-center justify-center flex-shrink-0 disabled:opacity-50 transition-colors"
            >
              <svg
                className="w-4 h-4 text-slate-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3.75m0 3h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </form>
          <p className="text-center text-[11px] text-amber-400/70 mt-3">
            ✦ Powered by GROQ Llama 3.1
          </p>
        </div>
      </motion.div>
    </>
  );
}
