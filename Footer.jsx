export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '25px',
      marginTop: '50px'
    }}>
      <p style={{ margin: '5px 0', fontSize: '16px' }}>
        © 2026 My Capstone Shop. All Rights Reserved.
      </p>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#ccc' }}>
        Built with ❤️ by Thiranex Intern
      </p>
    </footer>
  );
}