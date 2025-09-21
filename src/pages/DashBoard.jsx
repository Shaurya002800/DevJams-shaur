import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") || "Guest";
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(36.5);

  // simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = +(36 + Math.random() * 3).toFixed(1);
      setTemp(newTemp);
      setData((prev) => [...prev.slice(-9), { time: new Date().toLocaleTimeString(), temp: newTemp }]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
        <div className="card current-temp">Current Temp: {temp}°C</div>
      <header className="dash-header">
        <h1>Welcome, {user}</h1>
        <button onClick={() => navigate("/")}>Logout</button>
      </header>

      <div className="chart-container">
        <h2>Live Temperature Monitoring</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis domain={[35, 40]} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#0077cc" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="info-cards">
        <div className="card">Current Temp: {temp}°C</div>
        <div className="card">Device Battery: 85%</div>
        <div className={`card alert ${temp > 38 ? "high" : ""}`}>
          {temp > 38 ? "⚠️ High Fever Detected!" : "✅ Normal"}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
