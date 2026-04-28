
export default function Projects() {
  const projects = [
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
      demo: "#",
      highlight: true
    },
    {
      title: "AI Meeting Intelligence Dashboard",
      image: "/projects/proj_meeting_dash.png",
      description: [
        "FastAPI backend processing meeting notes using advanced LLMs.",
        "Automatically extracts actions, concise summaries, and structured tasks."
      ],
      tech: ["Python", "FastAPI", "Groq LLaMA-3.1", "Pydantic"],
      impact: "Production-ready, machine-readable JSON output for voice-first platforms.",
      github: "https://github.com/Sornambal/AI-Meeting-Intelligence-Dashboard",
      demo: "#",
      highlight: true
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
    },
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
      demo: "https://huggingface.co/spaces/Sornambal/Smart_News_Summarizer_Agent"
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
    /* {
      title: "Predicting Loan Payback (Kaggle)",
      description: "Binary classification modeling predicting loan playback probability using a carefully tuned LightGBM model.",
      tech: ["Python", "LightGBM", "Scikit-Learn", "Pandas"],
      impact: "High stability generalization handling class imbalance with multi-seed training.",
      github: "https://github.com/Sornambal/Predicting-Loan-Payback-Kaggle-Playground-Series-S5E11",
      demo: "https://www.kaggle.com/competitions/playground-series-s5e11"
    }, */
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
      demo: "https://huggingface.co/spaces/Sornambal/AI_CHATBOT"
    }
    /*,
    {
      title: "Smart Job Finder",
      description: "Flask-based web application that helps users find current job openings using the Adzuna Job Search API.",
      tech: ["Python", "Flask", "HTML5/CSS3", "Adzuna API"],
      impact: "Secure API key handling and live data fetching for real-time job availability.",
      github: "https://github.com/Sornambal/Smart-Job-Finder-Flask-Web-App-using-Adzuna-API",
      demo: "#"
    },
    {
      title: "Smart Crop Recommendation System",
      description: "Streamlit web application that intelligently predicts suitable crops based on environmental variables.",
      tech: ["Python", "Scikit-Learn", "Streamlit", "NumPy"],
      impact: "Real-time crop recommendation using trained machine learning models.",
      github: "https://github.com/Sornambal/crop-prediction-streamlit",
      demo: "#"
    },
    {
      title: "Sentiment Analysis of Book Review",
      description: "NLP classification on book reviews using a Naive Bayes classifier and TF-IDF vectorization.",
      tech: ["Python", "NLTK", "Scikit-Learn", "Imblearn"],
      impact: "Effective handling of imbalanced classes via oversampling.",
      github: "https://github.com/Sornambal/Sentiment-analysis-of-book-review",
      demo: "#"
    },
    {
      title: "Beverage Sales Dashboard",
      description: "Interactive Power BI dashboard to analyze beverage sales and profitability using structured datasets.",
      tech: ["Power BI", "Data Visualization", "Data Integration"],
      impact: "Provides actionable, real-time insights for business decision-making.",
      github: "https://github.com/Sornambal/Beverage-Sales-Profitability-Dashboard",
      demo: "#"
    }
    */
  ];

  return (
    <section id="projects" className="container">
      <h2 style={{ textAlign: 'center' }}>
        <span className="text-gradient">Featured Projects</span>
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
        A selection of my best work focused on Generative AI, machine learning pipelines, and full-stack intelligent systems.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className={`glass-card ${project.highlight ? 'highlight-card' : ''}`} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            boxShadow: project.highlight ? '0 0 30px rgba(56, 189, 248, 0.1)' : undefined
          }}>
            {project.highlight && (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '-2rem',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                color: 'white',
                padding: '0.25rem 2.5rem',
                transform: 'rotate(45deg)',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                zIndex: 10
              }}>
                PRODUCTION GRADE
              </div>
            )}

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
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                {project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>
                    <img src="https://cdn.simpleicons.org/github/a3a3a3" alt="GitHub" style={{ width: '18px', height: '18px' }} /> Code
                  </a>
                )}
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>
                     Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
