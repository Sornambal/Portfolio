"use client";

import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Bot,
  Server,
  Laptop2,
  Database,
  Cloud,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: <><BrainCircuit color="var(--primary)" size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} /> AI / Machine Learning</>,
      skills: [
        "Machine Learning", "Deep Learning", "NLP",
        "Feature Engineering", "Model Evaluation", "Classification", "Regression",
        "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"
      ]
    },
    {
      title: <><Bot color="var(--primary)" size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} /> Generative AI & Agentic Systems</>,
      skills: [
        "LLM Applications (Groq, FLAN-T5)", "Retrieval-Augmented Generation (RAG)",
        "LangGraph", "Multi-Agent Orchestration", "Prompt Engineering", 
        "LLM Optimization", "Transformers"
      ]
    },
    {
      title: <><Server color="var(--primary)" size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} /> Backend & APIs</>,
      skills: [
        "Python", "Flask", "FastAPI",
        "REST APIs", "API Integration",
        "Automation Pipelines", "Scheduling Systems"
      ]
    },
    {
      title: <><Laptop2 color="var(--primary)" size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} /> Frontend & Full Stack</>,
      skills: [
        "React.js", "Next.js",
        "HTML", "CSS", "JavaScript",
        "Gradio", "Streamlit"
      ]
    },
    {
      title: <><Database color="var(--primary)" size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} /> Databases & Vector Stores</>,
      skills: [
        "MongoDB", "MySQL",
        "FAISS (Vector Search)"
      ]
    },
    {
      title: <><Cloud color="var(--primary)" size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} /> Deployment & Tools</>,
      skills: [
        "Hugging Face Spaces", "Render", "Netlify",
        "Git", "GitHub", "Jupyter Notebook",
        "Kaggle", "Databricks"
      ]
    }
  ];

  return (
    <section id="skills" className="container" style={{ paddingTop: '6rem' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', marginBottom: '1rem' }}
      >
        <span className="text-gradient">Technical Arsenal</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}
      >
        A comprehensive overview of my technical proficiencies and specialized tools across the AI and software development spectrum.
      </motion.p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            className="glass-card" 
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.25rem', color: '#f8fafc' }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <motion.span 
                  key={sIdx} 
                  className="skill-badge"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(129, 140, 248, 0.2)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
