import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeContextProvider } from "../context/theme";
import PostLoginRoutes from "./PostLoginRoutes";
import Login from "../pages/logIn/LogIn";
import Cookies from "js-cookie";

function RootRouting() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  useEffect(() => {
    const isAuthenticate = getAuthStatus();
    if (!isAuthenticate) {
      navigate("/login");
    }
  }, [location?.pathname]);

  const getAuthStatus = () => {
    const userToken = Cookies.get("userAuth") || "";
    if (userToken) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ThemeContextProvider Theme={"light"}>
      <Routes>
        <Route
          path="/login"
          element={
            getAuthStatus() ? <Navigate replace to="/" /> : <Login />
          }
        />
        <Route
          path="/*"
          element={
            getAuthStatus() ? (
              <PostLoginRoutes />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </ThemeContextProvider>
  );
}

export default RootRouting;
