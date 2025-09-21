import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <h3>Welcome, {user || "Guest"} 👋</h3>
        <p>Your sleep data and device preferences will appear here.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default ProfilePage;
