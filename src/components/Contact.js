"use client";

export default function Contact() {
  return (
    <section id="contact" className="container">
      <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          
          {/* Contact Info */}
          <div style={{ flex: '1 1 350px', padding: '3rem', borderRight: '1px solid var(--border)' }}>
            <h2><span className="text-gradient">Let's Connect</span></h2>
            <p style={{ marginBottom: '2rem' }}>
              Interested in collaborating or hiring a dedicated AI & Machine Learning Engineer? Let’s discuss how I can help your company innovate and grow with advanced, production-ready solutions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="mailto:sornambalp97@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>Email</div>
                  <div style={{ fontWeight: 500, fontFamily: 'monospace', fontSize: '1rem' }}>sornambalp97@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sornambal-p-b789132b8/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>LinkedIn</div>
                  <div style={{ fontWeight: 500 }}>sornambal-p-b789132b8</div>
                </div>
              </a>

              <a href="https://github.com/Sornambal" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>GitHub</div>
                  <div style={{ fontWeight: 500 }}>Sornambal</div>
                </div>
              </a>

              <a href="https://www.kaggle.com/sornambalp" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>Kaggle</div>
                  <div style={{ fontWeight: 500 }}>sornambalp</div>
                </div>
              </a>

              <a href="https://leetcode.com/u/Sornambal/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>LeetCode</div>
                  <div style={{ fontWeight: 500 }}>Sornambal</div>
                </div>
              </a>

              <a href="https://www.hackerrank.com/profile/sornambalp97" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>HackerRank</div>
                  <div style={{ fontWeight: 500 }}>sornambalp97</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ flex: '1 1 400px', padding: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
            <form action="mailto:sornambalp97@gmail.com" method="POST" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} autoComplete="off">
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>Name</label>
                <input type="text" name="name" required placeholder="John Doe" style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  fontFamily: 'inherit'
                }} autoComplete="off" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>Email</label>
                <input type="email" name="email" required placeholder="john@example.com" style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  fontFamily: 'inherit'
                }} autoComplete="off" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>Message</label>
                <textarea required name="message" rows={4} placeholder="Hello Sornambal..." style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

