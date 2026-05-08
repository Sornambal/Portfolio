import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";
import Memories from "@/components/Memories";
import TechBackground from "@/components/TechBackground";

export default function Home() {
  return (
    <main className="site-main">
      <TechBackground />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Memories />
      {/* Removed 'What I'm Currently Working On' for a more professional look */}
      <Contact />
      <Footer />
    </main>
  );
}
