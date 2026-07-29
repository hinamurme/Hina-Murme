import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Exprince from "@/components/Experince";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Exprince />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
