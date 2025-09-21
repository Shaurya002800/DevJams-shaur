import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name.trim()) {
      localStorage.setItem("user", name);
      navigate("/home");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="password" placeholder="Enter password" />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
