"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="container" id="about" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card" 
        style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', textAlign: 'left', background: 'rgba(10, 10, 15, 0.6)', border: '1px solid rgba(129, 140, 248, 0.15)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #818cf8, #c084fc)' }}></div>
        
        <h2 className="section-title" style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.02em', textAlign: 'left' }}>
          About <span style={{ color: '#818cf8' }}>Me</span>
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p>
            I am a final year <strong>B.Tech Information Technology</strong> student at KGiSL Institute of Technology with a strong passion for building in the AI and software development space. Driven by a growth mindset, adaptability, and a relentless learning attitude, I focus on transforming ideas into scalable, real-world systems—specifically in <strong>Agentic AI</strong> and <strong>Full Stack Development</strong>.
          </p>
          <p>
            My journey is defined by early exploration and continuous execution. In early 2026, I successfully secured multiple internship offers, ultimately choosing to join <strong>S Combinator</strong> to architect end-to-end multi-agent AI systems, valuing immense growth over comfort. Recognized consistently for academic excellence as a 2x Academic Topper and KITE Achiever, my goal is to constantly stretch my capabilities and solve complex challenges through innovative technology.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <span style={{ padding: '0.4rem 1rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '999px', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>Growth Mindset</span>
          <span style={{ padding: '0.4rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '999px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>Adaptability</span>
          <span style={{ padding: '0.4rem 1rem', background: 'rgba(244, 114, 182, 0.1)', border: '1px solid rgba(244, 114, 182, 0.2)', borderRadius: '999px', color: '#f472b6', fontSize: '0.85rem', fontWeight: 600 }}>Continuous Learning</span>
        </div>
      </motion.div>
    </section>
  );
}
