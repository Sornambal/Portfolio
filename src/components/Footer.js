export default function Footer() {
  return (
    <footer style={{ 
      padding: '2rem 0', 
      borderTop: '1px solid var(--border)', 
      marginTop: '4rem',
      textAlign: 'center',
      color: '#a3a3a3'
    }}>
      <div className="container">
        <p style={{ marginBottom: '0.5rem' }}>&copy; {new Date().getFullYear()} Sornambal P. All rights reserved.</p>
      </div>
    </footer>
  );
}
