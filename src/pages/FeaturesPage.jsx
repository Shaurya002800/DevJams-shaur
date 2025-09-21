import "./FeaturesPage.css";

function FeaturesPage() {
  const features = [
    {
      title: "Smart Sleep Monitoring",
      desc: "Track your sleep patterns and detect irregularities in real-time.",
    },
    {
      title: "AI-Based Insights",
      desc: "Get personalized recommendations to improve your sleep quality.",
    },
    {
      title: "Device Integration",
      desc: "Seamlessly connect with nearby Bluetooth devices for data sync.",
    },
    {
      title: "Secure Data",
      desc: "Your sleep data is encrypted and stored safely.",
    },
  ];

  return (
    <div className="features-container">
      <h2>Features of SomnoShield</h2>
      <div className="features-list">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesPage;
