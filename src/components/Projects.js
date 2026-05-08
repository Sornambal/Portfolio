"use client";
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Smart News Summarizer Agent",
      image: "/projects/proj_news_agent.png",
      description: [
        "Autonomous AI agent that fetches relevant news topics.",
        "Processes data via a multi-step reasoning pipeline to generate concise summaries."
      ],
      tech: ["Python", "LangChain", "Groq API", "Tavily API", "Flask"],
      impact: "Fully autonomous search & extraction without manual intervention.",
      github: "https://github.com/Sornambal/Smart-News-Summarizer-Agent",
      demo: "https://huggingface.co/spaces/Sornambal/Smart_News_Summarizer_Agent",
      highlight: true
    },
    {
      title: "AI Notes Chatbot (RAG)",
      image: "/projects/proj_chatbot.png",
      description: [
        "Document-based Q&A chatbot using LLM embeddings.",
        "Utilizes FAISS for scalable, real-time document retrieval."
      ],
      tech: ["Transformers", "FAISS", "SentenceTransformers", "Gradio", "FLAN-T5"],
      impact: "Supports PDF, DOCX, TXT with highly accurate semantic search.",
      github: "https://github.com/Sornambal/FLAN-T5-Based-AI-Chatbot-with-RAG",
      demo: "https://huggingface.co/spaces/Sornambal/AI_CHATBOT",
      highlight: true
    },
    {
      title: "Spaceship Titanic (Kaggle)",
      image: "/projects/proj_spaceship.png",
      description: [
        "Predictive classification modeling for passenger transport outcomes.",
        "Utilizes advanced feature engineering to handle complex dataset variance."
      ],
      tech: ["Python", "CatBoost", "Scikit-Learn", "Pandas"],
      impact: "Top ~3% global ranking (72 / 2584 participants).",
      github: "https://github.com/Sornambal/Spaceship-Titanic-Kaggle-Competition",
      demo: "https://www.kaggle.com/competitions/spaceship-titanic"
    },
    {
      title: "Job Application Intelligence System",
      image: "/projects/proj_job_system.png",
      description: [
        "Multi-agent AI system automating job tracking, email parsing, and follow-ups.",
        "Features a real-time dashboard and integrated WhatsApp alerts."
      ],
      tech: ["Python", "LangGraph", "Groq LLaMA-3", "Flask", "Twilio"],
      impact: "99% email extraction accuracy, preventing invalid transitions with a Finite State Machine.",
      github: "https://github.com/Sornambal/Job-Application-Intelligence-System",
      demo: "#"
    },
    {
      title: "AI Meeting Intelligence Dashboard",
      image: "/projects/proj_meeting_dash.png",
      description: [
        "FastAPI backend processing meeting notes using advanced LLMs.",
        "Automatically extracts actions, concise summaries, and structured tasks."
      ],
      tech: ["Python", "FastAPI", "Groq LLaMA-3.1", "Pydantic"],
      impact: "Optimized API response from 10 ms to 3 ms, providing machine-readable JSON output.",
      github: "https://github.com/Sornambal/AI-Meeting-Intelligence-Dashboard",
      demo: "#"
    },
    {
      title: "CareCircle - AI Elderly Care Assistant",
      image: "/projects/proj_carecircle.png",
      description: [
        "Full-stack application designed for elderly care with robust medicine tracking.",
        "Features SOS dual-alerts and comprehensive medication adherence reporting."
      ],
      tech: ["Node.js", "Express", "React", "MongoDB", "Socket.IO"],
      impact: "Seamless unified account system with real-time notifications.",
      github: "https://github.com/Sornambal/CareCircle",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center' }}
      >
        <span className="text-gradient">Featured Projects</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}
      >
        A selection of my best work focused on Generative AI, machine learning pipelines, and full-stack intelligent systems.
      </motion.p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className={`glass-card ${project.highlight ? 'highlight-card' : ''}`} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              position: 'relative',
              overflow: 'hidden',
              padding: 0,
              boxShadow: project.highlight ? '0 0 30px rgba(56, 189, 248, 0.15)' : undefined
            }}
          >


            {/* Project Image Wrapper */}
            <div className="project-img-wrapper" style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              <div className="project-overlay" style={{
                position: 'absolute', inset: 0, background: 'rgba(5, 5, 5, 0.75)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease'
              }}>
                <a href={project.github !== '#' ? project.github : project.demo} target="_blank" rel="noopener noreferrer" className="view-btn">
                  View Details
                </a>
              </div>
            </div>
            
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', paddingRight: project.highlight ? '2rem' : '0' }}>{project.title}</h3>
              {Array.isArray(project.description) ? (
                <ul style={{ flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem', paddingLeft: '1.25rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, paddingBottom: '1.5rem' }}>
                  {project.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              ) : (
                <p style={{ flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{project.description}</p>
              )}
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>Key Impact:</div>
                <p style={{ fontSize: '0.9rem', margin: 0, fontStyle: 'italic', color: '#cbd5e1' }}>{project.impact}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="badge" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {project.github !== '#' && (
                  <motion.a whileHover={{ scale: 1.05 }} href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>
                    <img src="https://cdn.simpleicons.org/github/a3a3a3" alt="GitHub" style={{ width: '18px', height: '18px' }} /> Code
                  </motion.a>
                )}
                {project.demo !== '#' && (
                  <motion.a whileHover={{ scale: 1.05 }} href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>
                     Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
