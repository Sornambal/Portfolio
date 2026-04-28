export default function Skills() {
  const skillCategories = [
    {
      title: "🧠 AI / Machine Learning",
      skills: [
        "Machine Learning", "Deep Learning", "NLP",
        "Feature Engineering", "Model Evaluation", "Classification", "Regression",
        "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"
      ]
    },
    {
      title: "🤖 Generative AI & Agentic Systems",
      skills: [
        "LLM Applications (Groq, FLAN-T5)", "Retrieval-Augmented Generation (RAG)",
        "LangGraph", "Multi-Agent Orchestration", "Prompt Engineering", 
        "LLM Optimization", "Transformers"
      ]
    },
    {
      title: "🌐 Backend & APIs",
      skills: [
        "Python", "Flask", "FastAPI",
        "REST APIs", "API Integration",
        "Automation Pipelines", "Scheduling Systems"
      ]
    },
    {
      title: "💻 Frontend & Full Stack",
      skills: [
        "React.js", "Next.js",
        "HTML", "CSS", "JavaScript",
        "Gradio", "Streamlit"
      ]
    },
    {
      title: "🗄️ Databases & Vector Stores",
      skills: [
        "MongoDB", "MySQL",
        "FAISS (Vector Search)"
      ]
    },
    {
      title: "☁️ Deployment & Tools",
      skills: [
        "Hugging Face Spaces", "Render", "Netlify",
        "Git", "GitHub", "Jupyter Notebook",
        "Kaggle", "Databricks"
      ]
    }
  ];

  return (
    <section id="skills" className="container" style={{ paddingTop: '6rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span className="text-gradient">Technical Arsenal</span>
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        A comprehensive overview of my technical proficiencies and specialized tools across the AI and software development spectrum.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.25rem', color: '#f8fafc' }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
