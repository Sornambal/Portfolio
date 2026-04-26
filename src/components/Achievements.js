import { Trophy, Medal, Award, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Top ~3% Global Rank",
      subtitle: "Kaggle Spaceship Titanic Competition",
      desc: "Ranked 72 out of 2,584 participants globally using CatBoost and advanced feature engineering.",
      icon: <Trophy size={40} className="text-gradient" />
    },
    {
      title: "High Performance in Kaggle",
      subtitle: "Predicting Loan Payback",
      desc: "Achieved 0.92299 ROC-AUC in Kaggle Playground Series.",
      icon: <Trophy size={40} className="text-gradient" />
    },
    {
      title: "Academic Topper (2x)",
      subtitle: "B.Tech Information Technology",
      desc: "Achieved a CGPA of 9.29 / 10 at KGISL Institute of Technology.",
      icon: <Star size={40} className="text-gradient" />
    },
    {
      title: "KITE Achiever Award (2x)",
      subtitle: "KGiSL Institute of Technology",
      desc: "Recognized for outstanding contribution to the Pointer Camp and C Mini Projects.",
      icon: <Medal size={40} className="text-gradient" />
    },
    {
      title: "Hackathon Successes",
      subtitle: "Multiple National Hackathons",
      desc: "Selected 2x for SIH Internal Hackathon, participated in Trixathon 2K25.",
      icon: <Award size={40} className="text-gradient" />
    },
    {
      title: "CIT Hackathon 2025",
      subtitle: "Bronze Medal",
      desc: "Top 24 out of 220+ teams for 'MedCycle', an AI-powered medicine redistribution app.",
      icon: <Award size={40} className="text-gradient" />
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
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(99, 102, 241, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
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
