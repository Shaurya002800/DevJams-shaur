import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (

    <div className="landing">
      <header className="header">
        <h1>SomnoShield</h1>
        <nav>
                <a href="#features" onClick={(e) => { 
            e.preventDefault(); 
            document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); 
        }}>Features</a>
        <a href="#about">About</a>
        <button onClick={() => navigate("/login")}>Try Demo</button>
        </nav>
      </header>

      <section className="hero">
        <h2>Innovative Healthcare Monitoring</h2>
        <p>Wearable device for fever reduction and sleep apnea detection.</p>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </section>

      <section id="features" className="features">
        <div className="card">🌡️ Fever Reduction</div>
        <div className="card">😴 Sleep Apnea Monitoring</div>
        <div className="card">✅ Trusted by Providers</div>
      </section>
      <section className="hero">
        <h2>Innovative Healthcare Monitoring</h2>
        <p>Wearable device for fever reduction and sleep apnea detection.</p>
        <div className="device"></div>
        <button onClick={() => navigate("/login")}>Get Started</button>
    </section>
    </div>
  );
}

export default LandingPage;
