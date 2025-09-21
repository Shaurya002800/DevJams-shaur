import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h2>About SomnoShield</h2>
      <p>
        SomnoShield is designed to revolutionize sleep monitoring with AI-powered insights and secure device connectivity. 
        Our mission is to help people achieve better sleep and improve overall health.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>Empower individuals to take control of their sleep health using technology.</p>
        </div>
        <div className="about-card">
          <h3>Our Team</h3>
          <p>A passionate group of developers, designers, and innovators working together to build SomnoShield.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

