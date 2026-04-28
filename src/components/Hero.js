"use client";
import { useEffect, useState } from 'react';

export default function Hero() {
  const roles = [
    "AI & Agentic Systems Developer",
    "Machine Learning Engineer",
    "Full Stack AI Developer"
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer;
    const fullText = roles[currentRole];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
        if (text.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRole, roles]);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ 
            display: 'inline-block',
            padding: '0.6rem 1.5rem', 
            borderRadius: '9999px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#38bdf8',
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)'
          }}>
            Hello, I'm Sornambal P 👋
          </span>
        </div>
        
        <h1 style={{ marginBottom: '1.5rem', textShadow: '0 0 40px rgba(56, 189, 248, 0.2)', lineHeight: 1.1, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
          Building Scalable <br/>
          <span className="text-gradient">Intelligent Applications.</span>
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#94a3b8', height: '2.5rem', marginBottom: '2rem' }}>
          I am an <span style={{ color: 'white', fontWeight: 600 }}>{text}</span>
          <span className="typing-cursor" style={{ color: '#38bdf8' }}>|</span>
        </h2>
        
        <p style={{ fontSize: '1.125rem', marginBottom: '3rem', marginInline: 'auto', maxWidth: '650px', color: '#94a3b8', lineHeight: 1.8 }}>
          I specialize in designing and developing real-world AI systems using Machine Learning, Generative AI, and Multi-Agent Architectures.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects 
          </a>
          <a href="https://drive.google.com/file/d/1NNCP8ZgYR5kK__ayRTIvZIF4Tq15XjQI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
             Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
             Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
