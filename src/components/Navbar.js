"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Memories', href: '#memories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      transition: 'var(--transition)',
      background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(16px)',
      border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'max-content',
      maxWidth: '90vw'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontWeight: 500, fontSize: '0.95rem', color: '#cbd5e1' }}
                   onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav" style={{ display: 'none' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', cursor: 'pointer', padding: '0.25rem' }}
          >
            {mobileMenuOpen ? <span>✕</span> : <span>☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--background)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.5rem', fontWeight: 500 }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
        }
        @media (max-width: 767px) {
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
