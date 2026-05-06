"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        zIndex: 50,
        padding: '0.75rem 2rem',
        borderRadius: '9999px',
        transition: 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease',
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        {/* Logo removed for minimal header */}
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ y: -2 }}>
                <a href={link.href} style={{ fontWeight: 600, fontSize: '0.95rem', color: '#cbd5e1', transition: 'color 0.2s' }}
                   onMouseOver={(e) => e.target.style.color = '#fff'}
                   onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav" style={{ display: 'none' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', cursor: 'pointer', padding: '0.25rem' }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem'
            }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '0.5rem', fontWeight: 600, color: '#e2e8f0' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
        }
        @media (max-width: 767px) {
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
