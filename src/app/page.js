import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Extra from "@/components/Extra";
import Footer from "@/components/Footer";
import Memories from "@/components/Memories";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient"></div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Memories />
      <Extra />
      <Contact />
      <Footer />
    </main>
  );
}
