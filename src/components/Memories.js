"use client";
import { User, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
export default function Memories() {
  const [selectedImg, setSelectedImg] = useState(null);

  const posts = [
    {
      title: "Academic Topper & KITE Achiever",
      date: "Recent",
      snippet: "Consistency always compounds into results. Honored to be recognized with the Academic Topper Award and the KITE Achievers Award at the Annual Day 2026 of KGiSL Institute of Technology.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7435683627113517056",
      images: ["/memories/academic_topper_1.jpeg", "/memories/academic_topper.jpeg"]
    },
    {
      title: "5 Internship Offers & Joining S Combinator",
      date: "January 2026",
      snippet: "January 2026 Started With a Big Win. Received 5 internship offers and decided to join S Combinator Studio Private Limited as an AI Agents Social Media Automation Intern...",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7434222041907527680",
      images: ["/memories/intern_offers.png"]
    },
    {
      title: "KITE Achiever Badge",
      date: "Earlier",
      snippet: "Honored and Grateful! I’m delighted to share that I received the KITE Achiever Badge from our respected Managing Director, Mr. Ashok Bakthavathsalam Sir...",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7307405839957434371",
      images: ["/memories/kite_badge.jpeg"]
    },
    {
      title: "Pointer Camp Excellence",
      date: "Earlier",
      snippet: "I'm elated to share that I was honored for my outstanding achievement in completing the task of sorting options in the bank account mini-project during the prestigious Pointer Camp.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7219287229850947584/",
      images: ["/memories/pointer_camp.jpeg"]
    },
    {
      title: "SIH 2025 Internal Hackathon - Top 50",
      date: "Hackathon",
      snippet: "We are happy to share that our team Quantum Loop has been selected among the Top 50 teams in the Internal Hackathon of Smart India Hackathon (SIH) 2025...",
      link: "https://www.linkedin.com/posts/sornambal-p-b789132b8_sih2025-smartindiahackathon2025-teamquantumloop-activity-7377704188455100416-iKjH",
      images: ["/memories/sih.jpeg"]
    },
    {
      title: "CIT Hackathon 2025 - Bronze Medal",
      date: "Hackathon",
      snippet: "Thrilled to share our journey at the CIT Hackathon (12-Hours Hackathon)! Our team presented MedCycle: An AI-Powered Medicine Redistribution Web App and won Bronze.",
      link: "#", // Add link if available
      images: ["/memories/cit_1.jpeg", "/memories/cit_2.jpeg"]
    }
  ];

  return (
    <section id="memories" className="container">
      <h2 style={{ textAlign: 'center' }}>
        <span className="text-gradient">Proud Moments & Memories</span>
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
        Milestones, reflections, and insights from my professional journey on LinkedIn.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {posts.map((post, idx) => (
          <a key={idx} href={post.link} target="_blank" rel="noopener noreferrer" className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            padding: '1.5rem',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User color="#0a66c2" size={24} />
                <span style={{ fontSize: '0.85rem', color: '#a3a3a3' }}>{post.date}</span>
              </div>
              <ExternalLink size={18} color="#a3a3a3" />
            </div>
            
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
              {post.title}
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', fontStyle: 'italic', marginBottom: '1rem' }}>
              "{post.snippet}"
            </p>

            {post.images && post.images.length > 0 && (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: post.images.length > 1 ? '1fr 1fr' : '1fr', 
                gap: '0.5rem', 
                marginTop: 'auto',
                marginBottom: '1rem',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                {post.images.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`Preview for ${post.title}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImg(img);
                    }}
                    style={{ 
                      width: '100%', 
                      height: '180px', 
                      objectFit: 'cover',
                      borderRadius: '8px',
                      cursor: 'zoom-in'
                    }} 
                  />
                ))}
              </div>
            )}

            <div style={{ marginTop: 'auto', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              Read full post →
            </div>
          </a>
        ))}
      </div>

      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out'
          }}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImg} 
            alt="Full screen view" 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
