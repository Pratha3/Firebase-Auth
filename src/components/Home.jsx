import { useAuth } from "./AuthContext";
import SignOut from "./SignOut";

const Home = () => {
  const { user } = useAuth(); // Get user data from AuthContext

  return (
    <div className="text-center mt-5">
      <h1>Welcome {user ? user.email : "Guest"}!</h1>

      {user ? (
        <div>
          <h3>User Information:</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>{" "}
          {/* Display user's email */}
          <SignOut /> {/* Render the SignOut button */}
        </div>
      ) : (
        <p>Please log in or sign up to see your data.</p>
      )}
    </div>
  );
};

export default Home;
