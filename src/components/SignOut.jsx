import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button className="btn btn-outline-danger mt-3" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
