export default function About() {
  const features = [
    { icon: '🛍️', title: 'Wide Range', desc: 'Explore hundreds of quality products across multiple categories.' },
    { icon: '🔍', title: 'Easy Search', desc: 'Find exactly what you need with our smart search feature.' },
    { icon: '🛒', title: 'Smart Cart', desc: 'Add, remove, and manage your cart with a single click.' },
    { icon: '⚡', title: 'Fast & Modern', desc: 'Built with React and Vite for lightning-fast performance.' },
  ];

  const stats = [
    { number: '1000+', label: 'Products', icon: '📦' },
    { number: '500+', label: 'Happy Customers', icon: '😊' },
    { number: '50+', label: 'Categories', icon: '🏷️' },
    { number: '4.9★', label: 'Rating', icon: '⭐' },
  ];

  const team = [
    { name: 'Your Name', role: 'Full Stack Developer', emoji: '👨‍💻' },
    { name: 'Team Member', role: 'UI/UX Designer', emoji: '🎨' },
    { name: 'Team Member', role: 'Backend Developer', emoji: '⚙️' },
    { name: 'Team Member', role: 'Project Manager', emoji: '📊' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3c72, #2a5298, #6a11cb)',
        color: 'white',
        padding: '70px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '15px' }}>
          About Our Shop 🛍️
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
          A modern E-Commerce Capstone Project built as part of the Thiranex Internship Program.
        </p>
      </div>

      {/* Stats Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '-40px auto 40px auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            background: 'white',
            padding: '25px 15px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
          }}>
            <div style={{ fontSize: '36px' }}>{stat.icon}</div>
            <h2 style={{ color: '#1e3c72', fontSize: '28px', margin: '8px 0' }}>{stat.number}</h2>
            <p style={{ color: '#666', fontSize: '14px' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div style={{ maxWidth: '900px', margin: '20px auto 50px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: '#1e3c72', marginBottom: '20px' }}>Our Mission 🎯</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          We aim to provide a seamless online shopping experience by combining modern web technologies
          with an intuitive user interface.
        </p>
      </div>

      {/* Features Section */}
      <div style={{ background: '#f5f7fa', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#1e3c72', marginBottom: '40px' }}>
          What We Offer ✨
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ color: '#2a5298', marginBottom: '10px', fontSize: '22px' }}>{feature.title}</h3>
              <p style={{ color: '#666', fontSize: '16px' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={{ padding: '60px 20px', background: 'white' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#1e3c72', marginBottom: '40px' }}>
          Meet Our Team 👥
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '25px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {team.map((member, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
              padding: '35px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 6px 20px rgba(30,60,114,0.3)'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '10px' }}>{member.emoji}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{member.name}</h3>
              <p style={{ fontSize: '14px', opacity: 0.9 }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f5f7fa' }}>
        <h2 style={{ fontSize: '36px', color: '#1e3c72', marginBottom: '20px' }}>Get In Touch 📬</h2>
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
          Have questions or feedback? We'd love to hear from you!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ background: 'linear-gradient(90deg, #1e3c72, #2a5298)', color: 'white', padding: '15px 30px', borderRadius: '50px' }}>
            📧 contact@myshop.com
          </div>
          <div style={{ background: 'linear-gradient(90deg, #11998e, #38ef7d)', color: 'white', padding: '15px 30px', borderRadius: '50px' }}>
            📱 +91 98765 43210
          </div>
        </div>
      </div>
    </div>
  );
}