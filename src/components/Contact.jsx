"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCheck,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import {
  FiArrowRight,
  FiClock,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiShield,
  FiZap,
} from "react-icons/fi";

const fieldClass =
  "w-full rounded-xl border border-slate-700 bg-slate-950/55 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      username: "@hinamurme",
      href: "https://github.com/hinamurme",
      card: "border-violet-500/60 bg-violet-500/10",
      iconBg: "bg-violet-500/25 text-violet-200",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      username: "hina-murme",
      href: "https://linkedin.com/in/hina-murme",
      card: "border-blue-500/60 bg-blue-500/10",
      iconBg: "bg-blue-500/25 text-cyan-200",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      username: "murmehina45@gmail.com",
      href: "mailto:murmehina45@gmail.com",
      card: "border-pink-500/60 bg-pink-500/10",
      iconBg: "bg-pink-500/25 text-pink-200",
    },
  ];

  const benefits = [
    {
      icon: <FiClock />,
      title: "Fast Response",
      text: "I reply within 24 hours",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
    {
      icon: <FiShield />,
      title: "Professional",
      text: "Clean code & quality work",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      icon: <FiZap />,
      title: "Best Solutions",
      text: "Tailored solutions for your needs",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      icon: <FaUser />,
      title: "Reliable Partner",
      text: "Committed to your success",
      color: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    },
  ];

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#040c18] px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-slate-700/70 bg-slate-950/20 px-4 py-9 sm:px-8 sm:py-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/60 bg-slate-950/50 px-5 py-2 text-cyan-300">
            <FaUser />
            <span className="font-medium">Let&apos;s Connect</span>
          </div>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
      
          <div className="mx-auto mt-5 flex max-w-xs items-center gap-3 text-blue-400">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500" />
            <span>✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
        </motion.header>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-blue-400/45 bg-[#071426]/90 p-5 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-3 text-2xl text-white">
                <FiSend />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Send a Message
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Fill out the form below and I&apos;ll get back to you soon.
                </p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white">
                    <FaCheck />
                  </span>
                  <h4 className="mt-4 text-xl font-bold text-white">
                    Message Sent!
                  </h4>
                  <p className="mt-2 text-slate-400">
                    I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <label className="block text-sm font-semibold text-slate-100">
                    <span className="mb-2 flex items-center gap-2 text-slate-200">
                      <FaUser className="text-slate-400" />
                      Your Name
                    </span>
                    <input
                      className={fieldClass}
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-100">
                    <span className="mb-2 flex items-center gap-2 text-slate-200">
                      <FiMail className="text-slate-400" />
                      Email Address
                    </span>
                    <input
                      className={fieldClass}
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-100">
                    <span className="mb-2 flex items-center gap-2 text-slate-200">
                      <FaCode className="text-slate-400" />
                      Subject
                    </span>
                    <input
                      className={fieldClass}
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-100">
                    <span className="mb-2 flex items-center gap-2 text-slate-200">
                      <FiMessageSquare className="text-slate-400" />
                      Your Message
                    </span>
                    <textarea
                      className={`${fieldClass} min-h-40 resize-y`}
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <motion.button
                    whileHover={isSubmitting ? {} : { scale: 1.01 }}
                    whileTap={isSubmitting ? {} : { scale: 0.99 }}
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500 px-5 py-4 font-semibold text-white shadow-lg shadow-violet-950/50 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <FiSend />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-slate-700 bg-[#071426]/90 p-6">
              <div className="mb-5 flex items-center gap-4">
                <span className="rounded-xl bg-violet-500/25 p-3 text-2xl text-violet-200">
                  <FiZap />
                </span>
                <h3 className="text-xl font-bold text-white">Quick Contact</h3>
              </div>
              <a
                href="mailto:murmehina45@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950/45 p-4 transition hover:border-cyan-400/50"
              >
                <span className="rounded-full bg-cyan-500/15 p-3 text-xl text-cyan-300">
                  <FiMail />
                </span>
                <span>
                  <b className="block text-white">Email</b>
                  <span className="text-sm text-slate-300">
                    murmehina45@gmail.com
                  </span>
                  <small className="mt-2 block text-slate-400">
                    I typically reply within 24 hours
                  </small>
                </span>
              </a>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-[#071426]/90 p-6">
              <div className="mb-5 flex items-center gap-4">
                <span className="rounded-xl bg-violet-500/25 p-3 text-xl text-violet-100">
                  <FaUser />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Connect With Me
                  </h3>
                  <p className="text-sm text-slate-400">
                    Let&apos;s connect on your favorite platform
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 rounded-2xl border p-4 ${social.card}`}
                  >
                    <span
                      className={`rounded-full p-3 text-2xl ${social.iconBg}`}
                    >
                      {social.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <b className="block text-white">{social.label}</b>
                      <span className="block truncate text-sm text-slate-300">
                        {social.username}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-sm text-cyan-300">
                      Click <FiArrowRight />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
