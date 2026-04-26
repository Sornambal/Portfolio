import { Globe, Server, Database, Cloud, Brain, Code2, Users, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCards = [
    {
      title: "Python & AI Models",
      level: "Advanced",
      icon: <Brain size={32} color="#38bdf8" />
    },
    {
      title: "Generative AI & LLMs",
      level: "Advanced",
      icon: <Code2 size={32} color="#38bdf8" />
    },
    {
      title: "Data Science Tools",
      level: "Advanced",
      icon: <Database size={32} color="#38bdf8" />
    },
    {
      title: "Backend Development",
      level: "Intermediate",
      icon: <Server size={32} color="#38bdf8" />
    },
    {
      title: "Web Technologies",
      level: "Intermediate",
      icon: <Globe size={32} color="#38bdf8" />
    },
    {
      title: "Cloud & Deployment",
      level: "Intermediate",
      icon: <Cloud size={32} color="#38bdf8" />
    },
    {
      title: "Problem Solving",
      level: "Soft Skill",
      icon: <Lightbulb size={32} color="#818cf8" />
    },
    {
      title: "Team Collaboration",
      level: "Soft Skill",
      icon: <Users size={32} color="#818cf8" />
    }
  ];

  return (
    <section id="skills" className="container" style={{ paddingTop: '6rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="text-gradient">Technical Expertise</span>
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {skillCards.map((card, idx) => (
          <div key={idx} className="glass-card" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            gap: '1.25rem',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Circular Icon Container */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(56, 189, 248, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 20px rgba(56, 189, 248, 0.1), 0 0 15px rgba(56, 189, 248, 0.1)',
              marginBottom: '0.5rem'
            }}>
              {card.icon}
            </div>
            
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#e2e8f0', fontWeight: 600 }}>
              {card.title}
            </h3>
            
            {/* Proficiency Badge */}
            <span style={{
              padding: '0.25rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 500,
              background: card.level === 'Soft Skill' ? 'rgba(129, 140, 248, 0.1)' : 'rgba(56, 189, 248, 0.1)',
              color: card.level === 'Soft Skill' ? '#818cf8' : '#38bdf8',
              border: `1px solid ${card.level === 'Soft Skill' ? 'rgba(129, 140, 248, 0.3)' : 'rgba(56, 189, 248, 0.3)'}`
            }}>
              {card.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
