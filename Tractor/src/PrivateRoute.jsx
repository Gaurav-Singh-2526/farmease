import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
// import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  // ✅ Agar user logged in hai → page show karo
  // ❌ Agar nahi → login page pe bhejo
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;