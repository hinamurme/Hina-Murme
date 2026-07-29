"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Move constants outside component
const roles = [
  "MERN Stack Developer",
  "Full-Stack Web Developer",
  "REST API Specialist",
  "Authentication System Developer",
  "Responsive UI Builder",
  "MongoDB Database Developer",
];

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
                  Passionate MERN Stack Developer with hands-on experience in
                  building
                  <span className="text-cyan-300 font-medium">
                    {" "}
                    full-stack applications
                  </span>
                  , designing{" "}
                  <span className="text-purple-300 font-medium">
                    RESTful APIs
                  </span>
                  , and implementing secure{" "}
                  <span className="text-pink-300 font-medium">
                    JWT authentication
                  </span>
                  . I craft responsive, user-centric web solutions using React,
                  Node.js, and MongoDB.
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

// AI Chatbot Component
function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
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
              content: `You are Hina Murme's portfolio assistant. ONLY provide real information about Hina.

About Hina:
- Name: Hina Murme
- Role: MERN Stack Developer
- Experience: 1 Year 
- Email: murmehina45@gmail.com
- Phone: +91 9284042371
- Location: India

Skills: JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs, JWT Authentication, Git, GitHub

Projects:
1. E-Commerce Web App - Full-stack shopping platform with cart and payment integration
2. Grocify - Grocery delivery app with real-time inventory
3. Portfolio Website - Modern developer portfolio with AI chatbot

Education: B.Sc Computer Science (2021-2024) from Dr. Babasaheb Ambedkar Marathwada University

Achievements: Built 10+ full-stack projects, Completed internship with distinction

Keep responses friendly, concise (under 3 sentences), and professional. Only answer based on this information.`,
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

      const botMsg = {
        sender: "bot",
        text: botReply,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Connection issue. Please check your API key or try again later.",
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100%-2rem)] sm:w-96 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-2xl overflow-hidden z-50 border border-gray-700"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
            <svg
              className="w-5 h-5 text-white"
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
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded-full text-green-300">
              Live
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
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
        <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-900/50">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 text-sm mt-8 space-y-3">
              <div className="text-4xl">🤖</div>
              <p className="font-medium">Hi! I'm Hina's AI Assistant</p>
              <p className="text-xs text-gray-500">Powered by GROQ Llama 3.1</p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <span className="text-xs bg-gray-800 px-3 py-1.5 rounded-full text-cyan-300">
                  Skills
                </span>
                <span className="text-xs bg-gray-800 px-3 py-1.5 rounded-full text-purple-300">
                  Projects
                </span>
                <span className="text-xs bg-gray-800 px-3 py-1.5 rounded-full text-pink-300">
                  Experience
                </span>
                <span className="text-xs bg-gray-800 px-3 py-1.5 rounded-full text-cyan-300">
                  Contact
                </span>
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-xl text-sm max-w-[85%] whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gray-800 text-gray-100 border border-gray-700"
                }`}
              >
                {msg.sender === "bot" && (
                  <span className="text-xs text-cyan-400 mr-1">🤖</span>
                )}
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-900 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              className="flex-1 bg-gray-800 text-white border border-gray-700 px-3 py-2 rounded-xl text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Hina..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 rounded-xl text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              Send
            </button>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-2">
            🚀 Powered by GROQ Llama 3.1
          </p>
        </div>
      </motion.div>
    </>
  );
} /*
              placeholder="Ask me anything about Hina..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 rounded-xl text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              Send
            </button>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-2">
            🚀 Powered by GROQ Llama 3.1
          </p>
        </div>
      </motion.div>
    </>
  );
}
*/
