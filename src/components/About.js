export default function About() {
  return (
    <section id="about" className="container">
      <h2 style={{ textAlign: 'center' }}>
        <span className="text-gradient">About Me</span>
      </h2>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Hi, I’m Sornambal P — an AI/ML-focused B.Tech Information Technology student passionate about building real-world intelligent systems.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          I specialize in applied Machine Learning, NLP, and LLM-based applications, with hands-on experience in designing scalable AI workflows. My work focuses on transforming ambiguous problem statements into structured, production-ready solutions.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          I have built RAG-based systems, agentic AI workflows, and end-to-end ML pipelines using tools like LangChain, LangGraph, FAISS, and transformer models, with a strong emphasis on reliability, evaluation, and real-world usability.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          As a Kaggle Top 3% global competitor, I focus on feature engineering, robust validation strategies, and performance optimization — ensuring models generalize well beyond experimentation.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          I enjoy working in fast-paced environments, building APIs, deploying ML-powered applications, and integrating AI into complete end-to-end systems.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', lineHeight: '1.8' }}>
          🚀 Currently seeking opportunities to contribute to impactful AI/ML systems while continuing to grow as an applied AI engineer.
        </p>
      </div>
    </section>
  );
}
