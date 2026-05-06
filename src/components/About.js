export default function About() {
  return (
    <section className="container" id="about" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', letterSpacing: '0.01em' }}>Professional Summary</h2>
        <p style={{ color: '#cbd5e1', fontSize: '1.13rem', lineHeight: '1.7', marginBottom: 0 }}>
          I specialize in delivering end-to-end AI and machine learning solutions for business. My expertise spans data engineering, model development, MLOps, and cloud deployment. I’m committed to clear communication, agile teamwork, and building products that scale.
        </p>
      </div>
    </section>
  );
}
