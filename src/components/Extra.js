
export default function Extra() {
  return (
    <section className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Working On */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            
            <h3 style={{ margin: 0 }}>What I'm Currently Working On</h3>
          </div>
          <p style={{ margin: 0, color: '#a3a3a3', lineHeight: '1.8' }}>
            At S Combinator, I'm building out a massive multi-agent architecture for social media automation. This involves orchestrating several brand-aware sub-agents, handling API limit states, and deploying to cloud infrastructure. 
            I'm continuously exploring the new frontiers of <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>LLaMA-3</span>, <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>LangGraph</span>, and robust agentic systems.
          </p>
        </div>

      </div>
    </section>
  );
}
