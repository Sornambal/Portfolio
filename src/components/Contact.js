"use client";

export default function Contact() {
  return (
    <section id="contact" className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'rgba(10, 10, 15, 0.6)' }}>
        
        {/* Top small text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ width: '40px', height: '1px', background: 'rgba(3, 200, 249, 0.4)' }}></div>
          <span style={{ fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
            LET'S BUILD TOGETHER
          </span>
          <div style={{ width: '40px', height: '1px', background: 'rgba(3, 200, 249, 0.4)' }}></div>
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem', background: 'linear-gradient(90deg, #f8fafc, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
          Get In Touch
        </h2>

        {/* Description Text */}
        <p style={{ color: '#cbd5e1', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: '1.6', padding: '0 1rem' }}>
          Open to collaborate with interested and talented minds. Always looking for opportunities in internships and exciting AI/ML & Agentic AI projects.
        </p>

        {/* Availability Box */}
        <div style={{ padding: '0.8rem 1.5rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px', marginBottom: '2.5rem', display: 'inline-block', maxWidth: '100%' }}>
          <span style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)', fontWeight: 700, color: '#10b981', letterSpacing: '0.05em', textAlign: 'center', display: 'block' }}>
            AVAILABLE FOR INTERNSHIPS & SDE ROLES
          </span>
        </div>

        {/* Email Box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 3vw, 1.5rem)', padding: 'clamp(0.8rem, 3vw, 1.25rem) clamp(1rem, 4vw, 2.5rem)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(3, 200, 249, 0.2)', borderRadius: '12px', marginBottom: '3rem', cursor: 'pointer', transition: 'background 0.2s', width: '100%', maxWidth: '400px', justifyContent: 'center' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'} onClick={() => window.location.href='mailto:sornambalp97@gmail.com'}>
          <div style={{ padding: 'clamp(0.4rem, 2vw, 0.5rem)', background: 'rgba(3, 200, 249, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="far fa-envelope" style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: '#38bdf8' }}></i>
          </div>
          <span style={{ fontFamily: 'monospace', fontSize: 'clamp(0.85rem, 4vw, 1.1rem)', color: '#e2e8f0', letterSpacing: '0.02em', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
            sornambalp97@gmail.com
          </span>
        </div>

        {/* Quote */}
        <div style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '1rem', marginBottom: '3rem', maxWidth: '400px', lineHeight: '1.6' }}>
          "I reply within 24 hours. Let's build something."
        </div>

        {/* Social Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/sornambal-p-b789132b8/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', transition: 'all 0.2s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.color = '#cbd5e1'; }}>
            <i className="fab fa-linkedin-in" style={{ fontSize: '1rem' }}></i> LINKEDIN
          </a>
          <a href="https://github.com/Sornambal" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', transition: 'all 0.2s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.color = '#cbd5e1'; }}>
            <i className="fab fa-github" style={{ fontSize: '1rem' }}></i> GITHUB
          </a>
          <a href="https://leetcode.com/u/Sornambal/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', transition: 'all 0.2s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.color = '#cbd5e1'; }}>
            <i className="fas fa-code" style={{ fontSize: '1rem' }}></i> LEETCODE
          </a>
          <a href="https://www.kaggle.com/sornambalp" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', transition: 'all 0.2s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.color = '#cbd5e1'; }}>
            <i className="fab fa-kaggle" style={{ fontSize: '1rem' }}></i> KAGGLE
          </a>
          <a href="https://www.hackerrank.com/profile/sornambalp97" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', transition: 'all 0.2s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.color = '#cbd5e1'; }}>
            <i className="fab fa-hackerrank" style={{ fontSize: '1rem' }}></i> HACKERRANK
          </a>
        </div>
      </div>
    </section>
  );
}

