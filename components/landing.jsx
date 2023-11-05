import Link from 'next/link';

export default function Landing() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("/social.jpeg")',
    backgroundPosition: 'center',
    background: 'green',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    padding: '20px',
    color: 'white',
  };

  const contentContainerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
  };

  const heroStyle = {
    textAlign: 'center',
  };

  const ctaButtonStyle = {
    width: '200px',
    height: '60px',
    background: 'lightgreen',
    border: 'none',
    margin: '20px auto',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '18px',
    color: 'white',
    fontWeight: '600',
  };

  const testimonialsStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const footerStyle = {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
  };

  return (
    <main style={containerStyle}>
      <header style={headerStyle}>
        <div>
          <h2>Welcome</h2>
        </div>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <div style={contentContainerStyle}>
        <div style={heroStyle}>
          <h1>MatchYa!</h1>
          <p>
            This website serves as a platform for both aspiring and established content creators to<br></br> 
            discover their creative passions and connect with a vibrant community of fellow content innovators.
          </p>
          <p>
              Take this quiz to find which categories you fall in.
          </p>
          <Link href="api/auth/login">
            <button style={ctaButtonStyle}>Start the Quiz</button>
          </Link>
        </div>
      </div>
      <div style={testimonialsStyle}>
        <div>
          {/* Testimonials or user feedback */}
        </div>
      </div>
      <footer style={footerStyle}>
      <div>&copy; 2023 MatchYa!</div>
        <div>Contact: contact@MatchYa!.com</div>
        <div>
          Follow Us:
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
