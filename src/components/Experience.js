  <h2 className="section-title" style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', letterSpacing: '0.01em' }}>Professional Experience</h2>

export default function Experience() {
  const experiences = [
    {
      role: "Agentic AI Intern",
      company: "S Combinator",
      duration: "Jan 2026 – Present",
      type: "Remote",
      details: [
        "Designed and implemented a multi-agent AI system with centralized orchestration and brand-aware sub-agents",
        "Automated the end-to-end content lifecycle (ideation → creation → scheduling → publishing) using LLM-based workflows",
        "Integrated AI agents with APIs, schedulers, and dashboards to enable scalable, real-time automation",
        "Worked on system design, prompt engineering, and agent workflows in a fast-paced startup environment"
      ]
    },
    {
      role: "AI/ML Intern",
      company: "CloudAI Labs",
      duration: "Dec 2025 – Jan 2026",
      type: "Remote",
      details: [
        "Implemented Python-based AI/ML workflows involving data preprocessing, exploratory analysis, and baseline model experimentation.",
        "Applied supervised learning techniques to real-world problem scenarios under guided mentorship, strengthening model evaluation and debugging skills.",
        "Collaborated remotely to complete structured ML tasks, improving code quality, documentation, and experimentation practices."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Cognifyz Technologies",
      duration: "Jun 2025 – Jul 2025",
      type: "Remote",
      details: [
        "Performed exploratory and geospatial data analysis to identify restaurant demand zones.",
        "Built and optimized regression models for rating prediction, achieving a ~10% performance improvement through feature engineering."
      ]
    },
    {
      role: "Data Science Intern",
      company: "SkillCraft Technology",
      duration: "Apr 2025 – May 2025",
      type: "Remote",
      details: [
        "Trained and evaluated 5+ supervised ML models (Random Forest, Decision Tree) on real-world datasets.",
        "Improved classification performance to 81% accuracy via hyperparameter optimization.",
        "Developed an interpretable model identifying accident-causing factors."
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 style={{ textAlign: 'center' }}>
        <span className="text-gradient">Experience</span>
      </h2>
      
      <div style={{ maxWidth: '800px', margin: '3rem auto 0', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '24px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.8), rgba(129, 140, 248, 0.1))',
          boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
        }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ position: 'relative', paddingLeft: '4rem' }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '13px',
                top: '5px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--background)',
                border: '2px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.6)'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--foreground)' }}>{exp.role}</h3>
                    <div style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                       {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 600, color: '#e2e8f0' }}>{exp.duration}</div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{exp.type}</div>
                  </div>
                </div>
                
                <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#a3a3a3', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ lineHeight: '1.6' }}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
