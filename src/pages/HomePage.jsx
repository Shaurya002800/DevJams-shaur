import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [scanning, setScanning] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleScanDevices = async () => {
    setScanning(true);
    try {
      // Web Bluetooth API (works in Chrome over HTTPS or localhost)
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      setDevices((prev) => [...prev, device.name || "Unnamed Device"]);
    } catch (error) {
      console.error("Bluetooth scan failed:", error);
      alert("Bluetooth scan failed or was cancelled.");
    }
    setScanning(false);
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="home-nav">
        <h1>SomnoShield</h1>
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/features")}>Features</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/profile")}>Profile</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>

      {/* Content */}
      <div className="home-content">
        <h2>Welcome to SomnoShield</h2>
        <p>Connect your mobile device to start monitoring your sleep.</p>

        <div className="add-device">
          <button onClick={handleScanDevices} disabled={scanning}>
            {scanning ? "Scanning..." : "Add Device"}
          </button>

          {devices.length > 0 && (
            <ul className="device-list">
              {devices.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
