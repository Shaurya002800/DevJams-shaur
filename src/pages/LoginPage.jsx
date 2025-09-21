import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Lamp glow follows mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouseX', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouseY', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("user", name);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to SomnoShield</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
        />
        <button
          type="button"
          className="show-hide-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
