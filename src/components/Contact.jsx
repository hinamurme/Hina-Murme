"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheck, FaUser, FaCode } from "react-icons/fa";
import { FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
// import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      label: "GitHub", 
      href: "https://github.com/hinamurme", 
      color: "hover:text-purple-400", 
      bgColor: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      username: "@hinamurme"
    },
    { 
      icon: <FaLinkedin />, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/hina-murme", 
      color: "hover:text-blue-400", 
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      username: "hina-murme"
    },
    { 
      icon: <FaEnvelope />, 
      label: "Email", 
      href: "mailto:murmehina45@gmail.com", 
      color: "hover:text-red-400", 
      bgColor: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30",
      username: "murmehina45@gmail.com"
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header - Made smaller */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3 sm:mb-4">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium text-cyan-300">Let's Connect</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-400 max-w-2xl mx-auto px-4"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-4 lg:px-0">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1.5 rounded-lg">
                  <FiMessageSquare className="h-3.5 w-3.5" />
                </span>
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FaCheck className="h-5 w-5 text-white" />
                    </motion.div>
                    <h4 className="text-base font-bold text-white mb-1">Message Sent!</h4>
                    <p className="text-xs text-gray-400">I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          <FaUser className="inline-block mr-1 h-3 w-3" />
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          <FiMail className="inline-block mr-1 h-3 w-3" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">
                        <FaCode className="inline-block mr-1 h-3 w-3" />
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">
                        <FiMessageSquare className="inline-block mr-1 h-3 w-3" />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-cyan-500/20"
                      }`}
                      whileHover={isSubmitting ? {} : { scale: 1.02 }}
                      whileTap={isSubmitting ? {} : { scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="h-3.5 w-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-base font-semibold text-white mb-3">Quick Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    <FiMail className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400">Email</p>
                    <a href="mailto:murmehina45@gmail.com" className="text-sm text-white hover:text-cyan-300 transition-colors truncate block">
                      murmehina45@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Social Cards */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-lg">
                  <FaUser className="h-3.5 w-3.5" />
                </span>
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                    onMouseEnter={() => setHoveredContact(social.label)}
                    onMouseLeave={() => setHoveredContact(null)}
                    className={`group relative p-3 rounded-xl border ${social.borderColor} bg-gradient-to-br ${social.bgColor} backdrop-blur-sm overflow-hidden`}
                  >
                    {/* Hover Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                      animate={{
                        opacity: hoveredContact === social.label ? 1 : 0
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <motion.div
                          variants={iconVariants}
                          className={`p-1.5 rounded-lg bg-gradient-to-r ${social.bgColor} border ${social.borderColor}`}
                        >
                          <span className={`text-base ${social.color.split('hover:')[1]}`}>
                            {social.icon}
                          </span>
                        </motion.div>
                        
                        <motion.div
                          className="text-xs text-gray-400"
                          animate={{
                            opacity: hoveredContact === social.label ? 1 : 0.5
                          }}
                        >
                          Click
                        </motion.div>
                      </div>
                      
                      <h4 className={`text-sm font-semibold mb-0.5 ${social.color.split('hover:')[1]}`}>
                        {social.label}
                      </h4>
                      
                      <p className="text-xs text-gray-300 truncate">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
            >
              <h3 className="text-base font-semibold text-white mb-3">What to Expect</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "⚡", title: "Fast Response", desc: "Within 24 hours" },
                  { icon: "💬", title: "Consultation", desc: "Thorough discussion" },
                  { icon: "🎯", title: "Communication", desc: "Regular updates" },
                  { icon: "🤝", title: "Collaborative", desc: "Achieve goals" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <span className="text-base">{item.icon}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-semibold text-white mb-0.5">{item.title}</h4>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

  
          </motion.div>
        </div>


      </div>
    </section>
  );
}