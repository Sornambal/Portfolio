"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const roles = [
    "Agentic AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Full Stack Engineer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container" id="hero" style={{ minHeight: '80vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', paddingTop: '8rem', paddingBottom: '3rem' }}>
      
      {/* Left Column: Hero Text */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '999px', marginBottom: '1.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#10b981', letterSpacing: '0.05em' }}>OPEN TO OPPORTUNITIES</span>
        </div>
        
        <h1 className="hero-title" style={{ fontWeight: 800, fontSize: '3.5rem', letterSpacing: '-0.03em', color: '#fff', marginBottom: '1rem', textTransform: 'capitalize', lineHeight: '1.1' }}>
          sornambal p
        </h1>
        <h2 style={{ fontWeight: 700, fontSize: '1.25rem', color: '#818cf8', marginBottom: '1.5rem', letterSpacing: '0.01em', height: '2rem' }}>
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-block' }}
          >
            {roles[roleIndex]}
          </motion.span>
        </h2>
        <p style={{ maxWidth: '600px', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          I help companies unlock business value with advanced AI and machine learning. My focus: building robust, scalable solutions using LLMs, MLOps, and cloud-native architectures. Let’s turn your toughest challenges into real-world impact.
        </p>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 2rem', borderRadius: '999px', fontSize: '1rem' }}>
            View Projects <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem', fontSize: '0.85rem' }}></i>
          </a>
          <a href="#contact" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', borderRadius: '999px', fontSize: '1rem' }}>
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1NNCP8ZgYR5kK__ayRTIvZIF4Tq15XjQI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.85rem 2rem', borderRadius: '999px', fontSize: '1rem', border: '1px solid rgba(129, 140, 248, 0.4)', color: '#818cf8' }}>
            View Resume
          </a>
        </div>
      </div>

      {/* Right Column: Bento Profile Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card" 
        style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem', background: 'rgba(10, 10, 15, 0.6)', border: '1px solid rgba(129, 140, 248, 0.15)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(129, 140, 248, 0.05)' }}
      >
        {/* Header: Avatar & Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #818cf8, #c084fc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold', color: 'white', boxShadow: '0 0 20px rgba(129, 140, 248, 0.4)' }}>
            S
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>Sornambal P</h3>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.05em', marginTop: '0.35rem', textTransform: 'uppercase' }}>
              AI/ML ENGINEER
            </div>
            <div style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#ef4444' }}></i> Coimbatore, Tamil Nadu
            </div>
          </div>
        </div>

        {/* Bento Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', transition: 'transform 0.2s' }} className="hover-lift">
            <div style={{ fontSize: '2.5rem', fontWeight: 800, background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.35rem' }}>Top ~3%</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Kaggle Rank</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', transition: 'transform 0.2s' }} className="hover-lift">
            <div style={{ fontSize: '2.5rem', fontWeight: 800, background: 'linear-gradient(90deg, #f472b6, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.35rem' }}>9.29</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>CGPA (Topper)</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', transition: 'transform 0.2s' }} className="hover-lift">
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fbbf24', marginBottom: '0.35rem' }}>10+</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>AI Projects</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', transition: 'transform 0.2s' }} className="hover-lift">
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#34d399', marginBottom: '0.35rem' }}>2x</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>KITE Achiever</div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', paddingTop: '0.5rem' }}>
          <a href="https://github.com/Sornambal" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.4rem', transition: 'color 0.2s, transform 0.2s' }} onMouseOver={e => {e.target.style.color = '#fff'; e.target.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.target.style.color = '#94a3b8'; e.target.style.transform = 'scale(1)';}}><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sornambal-p-b789132b8/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.4rem', transition: 'color 0.2s, transform 0.2s' }} onMouseOver={e => {e.target.style.color = '#0a66c2'; e.target.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.target.style.color = '#94a3b8'; e.target.style.transform = 'scale(1)';}}><i className="fab fa-linkedin"></i></a>
          <a href="https://www.kaggle.com/sornambalp" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.4rem', transition: 'color 0.2s, transform 0.2s' }} onMouseOver={e => {e.target.style.color = '#20beff'; e.target.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.target.style.color = '#94a3b8'; e.target.style.transform = 'scale(1)';}}><i className="fab fa-kaggle"></i></a>
          <a href="https://leetcode.com/u/Sornambal/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.4rem', transition: 'color 0.2s, transform 0.2s' }} onMouseOver={e => {e.target.style.color = '#f89f1b'; e.target.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.target.style.color = '#94a3b8'; e.target.style.transform = 'scale(1)';}}><i className="fas fa-code"></i></a>
          <a href="https://www.hackerrank.com/profile/sornambalp97" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.4rem', transition: 'color 0.2s, transform 0.2s' }} onMouseOver={e => {e.target.style.color = '#2ec866'; e.target.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.target.style.color = '#94a3b8'; e.target.style.transform = 'scale(1)';}}><i className="fab fa-hackerrank"></i></a>
        </div>

        {/* Status Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', letterSpacing: '0.05em' }}>AVAILABLE FOR INTERNSHIPS & SDE ROLES</span>
        </div>
      </motion.div>

    </section>
  );
}
