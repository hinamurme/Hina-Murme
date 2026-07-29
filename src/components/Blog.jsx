"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiEdit3, FiStar } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "How I Built My Portfolio Website with Next.js 16",
    description:
      "A step-by-step guide on creating a modern developer portfolio with AI chatbot, animations, and stunning UI.",
    category: "Next.js",
    date: "June 15, 2026",
    image: "/Nextjs.png",
    featured: true,
    slug: "how-i-built-my-portfolio-website",
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    description:
      "Learn how to optimize React applications with memoization, code splitting, and lazy loading for better performance.",
    category: "React",
    date: "June 10, 2026",
    image: "/React.png",
    featured: false,
    slug: "react-performance-optimization",
  },
  {
    id: 3,
    title: "Responsive UI Design with Tailwind CSS",
    description:
      "Master responsive design using Tailwind CSS utilities and create beautiful, mobile-first interfaces.",
    category: "UI/UX",
    date: "June 5, 2026",
    image: "/UIUX.png",
    featured: false,
    slug: "responsive-ui-design-tailwind",
  },
  {
    id: 4,
    title: "Google Maps API Integration in React",
    description:
      "Complete guide to integrating Google Maps API in React applications with custom markers and interactive features.",
    category: "JavaScript",
    date: "May 28, 2026",
    image: "/React2.png",
    featured: false,
    slug: "google-maps-api-integration",
  },
  {
    id: 5,
    title: "Building Reusable Components in React",
    description:
      "Best practices for creating reusable, maintainable React components that scale with your application.",
    category: "React",
    date: "May 20, 2026",
    image: "/Bulding.png",
    featured: false,
    slug: "building-reusable-components",
  },
  {
    id: 6,
    title: "Frontend Developer Interview Questions",
    description:
      "Top 50 frontend developer interview questions with answers and explanations for your next job interview.",
    category: "Career",
    date: "May 15, 2026",
    image: "/Frotend.png",
    featured: false,
    slug: "frontend-interview-questions",
  },
  {
    id: 7,
    title: "JWT Authentication Implementation Guide",
    description:
      "Secure your applications with JWT authentication - from setup to advanced security practices.",
    category: "JavaScript",
    date: "May 10, 2026",
    image: "/JWT.png",
    featured: false,
    slug: "jwt-authentication-guide",
  },
  {
    id: 8,
    title: "Dark Mode Implementation in Next.js",
    description:
      "Learn how to implement dark mode in Next.js applications with theme switching and persistence.",
    category: "Next.js",
    date: "May 5, 2026",
    image: "/DarkMode.png",
    featured: false,
    slug: "dark-mode-implementation",
  },
  {
    id: 9,
    title: "API Integration Best Practices",
    description:
      "Best practices for integrating REST APIs in frontend applications with error handling and caching strategies.",
    category: "JavaScript",
    date: "April 28, 2026",
    image: "/API.png",
    featured: false,
    slug: "api-integration-best-practices",
  },
];

// const categories = [
//   "All",
//   "React",
//   "Next.js",
//   "JavaScript",
//   "UI/UX",
//   "Career",
//   "Web Development",
//   "Tips & Tricks",
//   "Tutorials",
// ];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  if (!mounted) {
    return (
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          Loading Blog...
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#040918] px-3 py-3 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-cyan-900/10"></div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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

      <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-slate-700/70 bg-slate-950/20 px-4 py-9 sm:px-8 sm:py-12">
        {/* Blog Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center"
        >


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 font-serif text-5xl font-bold sm:text-6xl md:text-7xl"
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>

          <div className="mx-auto mt-4 flex max-w-[10rem] items-center gap-3 text-fuchsia-400">
            <span className="h-px flex-1 bg-slate-700" />
            <FiStar />
            <span className="h-px flex-1 bg-slate-700" />
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 max-w-5xl"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-5 py-5 pl-14 text-base text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400 sm:text-lg"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Categories */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20"
                  : "border-slate-700 bg-slate-950/50 text-slate-200 hover:border-slate-500 hover:bg-slate-800/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        {/* Featured Blog Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-8"
          >
            <div className="overflow-hidden rounded-3xl border border-violet-500/75 bg-gradient-to-br from-[#08162a] to-[#090d22] p-4 shadow-2xl shadow-black/30 sm:p-7">
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:items-center">
                <div className="relative h-64 overflow-hidden rounded-2xl border border-violet-500/30 bg-slate-950 lg:order-2 lg:h-[27rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 z-10"></div>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="hidden">
                    <span className="text-6xl">🚀</span>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-5 lg:order-1">
                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <span className="bg-cyan-500/20 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{featuredPost.date}</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold leading-tight text-white transition-colors hover:text-cyan-300 sm:text-4xl">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-base leading-8 text-slate-300 sm:text-lg">
                    {featuredPost.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      Read More
                      <svg
                        className="w-4 h-4"
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
                      </svg>
                    </Link>
                    <span className="text-gray-400 text-sm">
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 sm:flex-row"
              >
                <div className="relative h-48 shrink-0 overflow-hidden bg-gray-800 sm:h-auto sm:w-72">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="hidden">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      📌
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-900/80 backdrop-blur-sm text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <span className="text-4xl block mb-4">🔍</span>
            <p className="text-lg">No articles found in this category.</p>
          </div>
        )}

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10"
        ></motion.div>
      </div>
    </section>
  );
}
