"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";
import { findBlogArticle } from "@/data/blogArticles";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = findBlogArticle(slug);

  if (!article)
    return (
      <main className="grid min-h-screen place-items-center bg-[#040918] p-6 text-center text-white">
        <div>
          <h1 className="font-serif text-4xl font-bold">Article not found</h1>
          <Link href="/#blog" className="mt-5 inline-block text-cyan-300">
            Back to blog
          </Link>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-[#040918] px-4 py-10 text-slate-200 sm:px-6 lg:py-16">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-4xl rounded-[2rem] border border-slate-700/70 bg-slate-950/55 p-5 shadow-2xl shadow-black/25 sm:p-9"
      >
        {/* <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
        >
          <FiArrowLeft /> Back to Blog
        </Link> */}
        <header className="mt-8 text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/50 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <FiTag /> {article.category}
          </span> */}
          <h1 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">
            {article.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {article.description}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <FiCalendar /> {article.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiClock /> {article.readTime}
            </span>
          </div>
        </header>
        <div className="relative mt-9 h-60 overflow-hidden rounded-2xl border border-violet-500/30 sm:h-96">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-9">
          <p className="text-lg leading-8 text-slate-300">
            This guide covers practical ideas you can apply while building
            modern web experiences. Each section focuses on a decision that
            helps make projects more reliable, maintainable, and enjoyable to
            use.
          </p>
          {article.sections.map((section, index) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-3 leading-8 text-slate-300">{section.text}</p>
            </motion.section>
          ))}
          <section className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6">
            <h2 className="font-serif text-2xl font-bold text-white">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-3">
              {article.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 text-slate-200">
                  <span className="text-cyan-300">✦</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.article>
    </main>
  );
}
