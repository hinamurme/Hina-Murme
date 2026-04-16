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
  "MongoDB Database Developer"
];

import { env } from "next/config";
const { GROQ_API_KEY, GROQ_API_URL } = env;

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
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
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
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center text-gray-400">
            Loading...
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20"></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Interactive Canvas Particles */}
        <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

        {/* Mouse interaction glow */}
        <motion.div
          className="fixed pointer-events-none z-0"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <ProfileImage mounted={mounted} />
          </div>

          {/* RIGHT - Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Hero Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                {/* Add your name here if needed */}
              </motion.h1>

              {/* Animated role */}
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold"
              >
                {roles[currentRole]}
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-2xl"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Enthusiastic{" "}
                <span className="text-cyan-300 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                with practical experience in developing
                <span className="text-pink-300 font-semibold">
                  {" "}RESTful APIs
                </span>
                , implementing
                <span className="text-purple-300 font-semibold">
                  {" "}JWT authentication
                </span>
                , and building responsive web applications using
                <span className="text-cyan-300 font-semibold">
                  {" "}React.js
                </span>{" "}
                and
                <span className="text-purple-300 font-semibold"> Node.js</span>.
                Looking to leverage my technical skills and internship
                experience to contribute to innovative projects and grow as a
                full-stack developer.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="/HinaMurme.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <div className="relative flex items-center justify-center gap-3">
                  <span className="font-bold">Download Resume</span>
                </div>
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AI Chatbot Button - Fixed at TOP LEFT */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed top-16 left-6 z-50 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          {/* AI Icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-sm font-semibold hidden md:inline-block">AI Assistant</span>
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </div>
      </motion.button>

      {/* Chatbot Component - Conditionally Rendered */}
      {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
    </>
  );
}

// Profile Image Component
function ProfileImage({ mounted }) {
  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      className="relative flex justify-center"
    >
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
        <div className="relative w-full h-full lg:right-12 lg:-top-6">
          {/* Decorative shapes */}
          <motion.div
            className="absolute -top-3 -left-3 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-xl opacity-50"
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-50"
            animate={{ y: [0, 20, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* Main Profile Circle */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
              <motion.div
                className="relative w-full h-full"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Image
                  src="/pic.jpg"
                  alt="Hina Murme"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-cyan-500/20"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Frontend AI Chatbot Component (Direct GROQ API Call - No Backend!)
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
      // Direct API call to GROQ from frontend
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
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
- Experience: 6 months internship
- Email: murmehina45@gmail.com
- Phone: +91 9284042371

Skills: JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs, JWT Authentication

Projects: E-Commerce Web App, Grocify (Grocery App), Portfolio Website

Education: B.Sc Computer Science (2021-2024) from Dr. Babasaheb Ambedkar Marathwada University

Keep responses friendly, short, and professional. Only answer based on this information.`
            },
            {
              role: "user",
              content: input
            }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices[0]?.message?.content || "Sorry, I couldn't process that request.";

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
          text: "⚠️ Error connecting to AI. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, y: -50, scale: 0.9 }}
      transition={{ type: "spring", damping: 25 }}
      className="fixed top-20 left-6 w-96 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-2xl overflow-hidden z-50 border border-gray-700"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="font-semibold text-white">🤖 AI Assistant</h3>
          <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded-full">Live</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-900/50">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-8 space-y-2">
            <div className="text-4xl">🤖</div>
            <p>Hi! I'm Hina's AI Assistant</p>
            <p className="text-xs">Powered by GROQ Llama 3.1</p>
            <p className="text-xs mt-2">Ask me about:</p>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">Skills</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">Experience</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">Projects</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">Contact</span>
            </div>
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl text-sm max-w-[80%] whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "bg-gray-800 text-gray-100 border border-gray-700"
              }`}
            >
              {msg.sender === "bot" && (
                <span className="text-xs text-cyan-400 mr-1">🤖 </span>
              )}
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">AI is thinking...</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="p-4 bg-gray-900 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            className="flex-1 bg-gray-800 text-white border border-gray-700 p-2 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Hina..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 rounded-lg text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          🚀 Powered by GROQ Llama 3.1 (Frontend)
        </p>
      </div>
    </motion.div>
  );
}