import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const bedroomRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Handle 3D bedroom interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !bedroomRef.current) return;
      e.preventDefault();
      const x = e.pageX - bedroomRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      bedroomRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (bedroomRef.current) {
      bedroomRef.current.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (bedroomRef.current) {
        bedroomRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - bedroomRef.current.offsetLeft);
    setScrollLeft(bedroomRef.current.scrollLeft);
  };

  return (
    <>
    <div className="landing-container">
      {/* 3D Bedroom Background */}
      <div 
        className="bedroom-scene"
        ref={bedroomRef}
        onMouseDown={startDrag}
        onMouseLeave={() => setIsDragging(false)}
      >
        <div className="room-container">
          <div className="wall left-wall"></div>
          <div className="wall right-wall"></div>
          <div className="wall back-wall"></div>
          <div className="ceiling"></div>
          <div className="floor"></div>
          
          {/* Bed */}
          <div className="bed">
            <div className="mattress">
              <div className="pillow"></div>
              <div className="pillow"></div>
            </div>
            <div className="bed-frame"></div>
          </div>
          
          {/* Nightstand */}
          <div className="nightstand">
            <div className="lamp">
              <div className="lamp-base"></div>
              <div className="lamp-shade"></div>
            </div>
          </div>
          
          {/* Window */}
          <div className="window">
            <div className="window-frame">
              <div className="moon"></div>
              <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
            </div>
          </div>
          
          {/* Device Visualization */}
          <div className="device-visualization">
            <div className="heart-rate-monitor">
              <div className="heart-rate-line"></div>
            </div>
            <div className="temperature-gauge">
              <div className="gauge-needle"></div>
            </div>
          </div>
        </div>
        
    
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
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
            <div className="detail-card">
              <h4>Emergency Response</h4>
              <p>Critical alerts with medical guidance when you need it most.</p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="cta-section">
          <button className="cta-button" onClick={() => navigate("/signup")}>
            Start Your Sleep Journey
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;