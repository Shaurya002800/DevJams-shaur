import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">SomnoShield</h1>
        <div className="nav-links">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="hero">
        <h2>Sleep Smart. Sleep Safe.</h2>
        <p>
          SomnoShield is an AI-powered sleep monitoring and wellness platform.
          We help you track sleep cycles, analyze health patterns, and improve rest.
        </p>
      </section>

      {/* Details Section */}
      <section className="details">
        <h3>Why SomnoShield?</h3>
        <div className="detail-grid">
          <div className="detail-card">
            <h4>Smart Tracking</h4>
            <p>Monitor sleep quality using non-intrusive AI models.</p>
          </div>
          <div className="detail-card">
            <h4>Personalized Insights</h4>
            <p>Get AI-driven advice tailored to your sleep habits.</p>
          </div>
          <div className="detail-card">
            <h4>Seamless Device Sync</h4>
            <p>Connect your mobile via Bluetooth for real-time tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
