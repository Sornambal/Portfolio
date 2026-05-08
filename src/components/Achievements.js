export default function Achievements() {
  const achievements = [
    {
      title: <><i className="fas fa-rocket"></i> Top ~3% Global Rank</>,
      subtitle: "Kaggle Spaceship Titanic Competition",
      desc: "Ranked 72 out of 2,584 participants globally using CatBoost and advanced feature engineering.",
      icon: <i className="fas fa-rocket" style={{ color: 'var(--primary)' }}></i>
    },
    {
      title: <><i className="fas fa-chart-bar"></i> High Performance in Kaggle</>,
      subtitle: "Predicting Loan Payback",
      desc: "Achieved 0.92299 ROC-AUC in Kaggle Playground Series.",
      icon: <i className="fas fa-chart-bar" style={{ color: 'var(--primary)' }}></i>
    },
    {
      title: <><i className="fas fa-graduation-cap"></i> Academic Topper (2x)</>,
      subtitle: "B.Tech Information Technology",
      desc: "Achieved a CGPA of 9.29 / 10 at KGISL Institute of Technology.",
      icon: <i className="fas fa-graduation-cap" style={{ color: 'var(--primary)' }}></i>
    },
    {
      title: <><i className="fas fa-trophy"></i> KITE Achiever Award (2x)</>,
      subtitle: "KGiSL Institute of Technology",
      desc: "Recognized for outstanding contribution to the Pointer Camp and C Mini Projects.",
      icon: <i className="fas fa-trophy" style={{ color: 'var(--primary)' }}></i>
    },
    {
      title: <><i className="fas fa-lightbulb"></i> Hackathon Successes</>,
      subtitle: "Multiple National Hackathons",
      desc: "Selected 2x for SIH Internal Hackathon, participated in Trixathon 2K25.",
      icon: <i className="fas fa-lightbulb" style={{ color: 'var(--primary)' }}></i>
    },
    {
      title: <><i className="fas fa-medal"></i> CIT Hackathon 2025</>,
      subtitle: "Bronze Medal",
      desc: "Top 24 out of 220+ teams for 'MedCycle', an AI-powered medicine redistribution app.",
      icon: <i className="fas fa-medal" style={{ color: 'var(--primary)' }}></i>
    }
  ];

  return (
    <section id="achievements" className="container">
      <h2 style={{ textAlign: 'center' }}>
        <span className="text-gradient">Achievements & Recognition</span>
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {achievements.map((item, idx) => (
          <div key={idx} className="glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '85px',
              height: '85px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(192, 132, 252, 0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.3), inset 0 0 15px rgba(192, 132, 252, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}>
              {item.icon}
            </div>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ margin: 0, fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>{item.subtitle}</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#a3a3a3' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
