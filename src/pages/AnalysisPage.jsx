import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./AnalysisPage.css";

function AnalysisPage() {
  const [data, setData] = useState([]); // Graph data
  const [temperature, setTemperature] = useState(36); // °C
  const [heartRate, setHeartRate] = useState(70); // BPM
  const [monitoring, setMonitoring] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!monitoring) return;

      // Simulate sensor readings
      const temp = +(35 + Math.random() * 5).toFixed(1); // 35 - 40°C
      const hr = Math.floor(60 + Math.random() * 40); // 60-100 BPM
      const time = new Date().toLocaleTimeString().split(" ")[0];

      setTemperature(temp);
      setHeartRate(hr);
      setData(prev => [...prev.slice(-20), { time, temp, hr }]);
    }, 1000);

    return () => clearInterval(interval);
  }, [monitoring]);

  const tempStatus = temperature < 37.5 ? "Normal ✅" : "Critical ⚠️";
  const hrStatus = heartRate < 100 ? "Normal ✅" : "High ⚠️";

  return (
    <div className="analysis-container">
      <h2>Live Monitoring Dashboard</h2>

      {/* Status Boxes */}
      <div className="status-boxes">
        <div className="status-box">
          <h3>Temperature</h3>
          <p>{temperature}°C</p>
          <p>{tempStatus}</p>
        </div>
        <div className="status-box">
          <h3>Heart Rate</h3>
          <p>{heartRate} BPM</p>
          <p>{hrStatus}</p>
        </div>
      </div>

      {/* Graph */}
      <div className="graph-box">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#ff4d4f" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="hr" stroke="#007bff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Controls */}
      <div className="monitoring-controls">
        <button onClick={() => setMonitoring(!monitoring)}>
          {monitoring ? "Stop Monitoring" : "Start Monitoring"}
        </button>
      </div>
    </div>
  );
}

export default AnalysisPage;
