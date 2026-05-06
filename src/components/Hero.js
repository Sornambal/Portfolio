"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Removed unused roles array
  return (
    <section className="container" id="hero" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
      <h1 className="hero-title" style={{ fontWeight: 800, fontSize: '2.8rem', letterSpacing: '-0.03em', color: '#fff', marginBottom: '1rem' }}>
        Sornambal P
      </h1>
      <h2 style={{ fontWeight: 700, fontSize: '1.35rem', color: '#818cf8', marginBottom: '1.5rem', letterSpacing: '0.01em' }}>
        AI & Machine Learning Engineer
      </h2>
      <p style={{ maxWidth: '600px', color: '#cbd5e1', fontSize: '1.13rem', lineHeight: '1.7', marginBottom: '2rem' }}>
        I help companies unlock business value with advanced AI and machine learning. My focus: building robust, scalable solutions using LLMs, MLOps, and cloud-native architectures. Let’s turn your toughest challenges into real-world impact.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href="https://drive.google.com/file/d/1NNCP8ZgYR5kK__ayRTIvZIF4Tq15XjQI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{ display: 'inline-block', textAlign: 'center', padding: '0.85rem 2.2rem', borderRadius: '999px', fontWeight: 600, color: '#818cf8', border: '1.5px solid #818cf8', background: 'rgba(255,255,255,0.08)', textDecoration: 'none'}}>
          Download Resume
        </a>
        <a href="#projects" style={{ background: 'linear-gradient(90deg,#818cf8,#a78bfa)', color: '#fff', fontWeight: 600, padding: '0.85rem 2.2rem', borderRadius: '999px', fontSize: '1.08rem', boxShadow: '0 2px 16px #6366f144', textDecoration: 'none', transition: 'background 0.2s' }}>View Projects</a>
        <a href="#contact" style={{ background: 'rgba(255,255,255,0.08)', color: '#818cf8', fontWeight: 600, padding: '0.85rem 2.2rem', borderRadius: '999px', fontSize: '1.08rem', border: '1.5px solid #818cf8', textDecoration: 'none', transition: 'background 0.2s' }}>Contact Me</a>
      </div>
    </section>
  );
}
