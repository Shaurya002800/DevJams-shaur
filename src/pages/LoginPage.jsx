import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("user", name);
      navigate("/home");
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
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
