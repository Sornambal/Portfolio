export default function About() {
  return (
    <section id="about" className="container">
      <h2 style={{ textAlign: 'center' }}>
        <span className="text-gradient">About Me</span>
      </h2>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          My journey into technology began with a deep curiosity about how systems make decisions. As an Information Technology student with a strong passion for Artificial Intelligence, I've transitioned from learning theoretical concepts to engineering real-world solutions.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          I specialize in building intelligent systems—from Retrieval-Augmented Generation (RAG) chatbots and multi-agent orchestration to robust predictive models. Whether it's developing an autonomous agent to automate job tracking or building a computer vision model to assist elderly care, my focus is always on creating technology that makes a tangible impact.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', lineHeight: '1.8' }}>
          Currently exploring the cutting edge of Agentic AI, I thrive in environments that challenge me to solve complex problems, optimize architectures, and build products that wow users. Let's build the future, one intelligent system at a time.
        </p>
      </div>
    </section>
  );
}
