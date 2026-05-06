import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";
import Memories from "@/components/Memories";

export default function Home() {
  return (
    <main className="site-main">
      {/* Animated gradient and mesh backgrounds */}
      <div className="bg-gradient"></div>
      <div className="bg-mesh"></div>

      {/* 3D animated spheres */}
      <div className="bg-3d-sphere sphere1"></div>
      <div className="bg-3d-sphere sphere2"></div>
      <div className="bg-3d-sphere sphere3"></div>

      {/* Animated floating abstract shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>
      <div className="floating-shape shape4"></div>

      {/* Minimalist SVG illustrations in corners */}
      <svg className="corner-illustration top-left" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40,180 Q110,40 180,40" stroke="#818cf8" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="60" cy="60" r="18" fill="#c084fc" opacity="0.5"/>
      </svg>
      <svg className="corner-illustration bottom-right" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M180,40 Q110,180 40,180" stroke="#c084fc" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="160" cy="160" r="18" fill="#818cf8" opacity="0.5"/>
      </svg>

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
