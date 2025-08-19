import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import GamEd from "../Component/Card/GamEd";
import LogInForm from "../Layouts/LogInForm";
import "../Styles/LoginPage.css";

function ResponsiveAside() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) return null;

  return (
    <aside id="loginPage-aside">
      <div id="loginPage-card-container">
        <GamEd />
      </div>
    </aside>
  );
}

const LoginPage = () => {
  const { login, isAuthenticated, loading } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && !loading) {
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, loading, navigate, location]);

  const handleLogin = async (email, password) => {
    setError("");
    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong.");
    }
  };

  return (
    <div id="login-page-wrapper">
      <ResponsiveAside />
      <main id="loginpage-main">
        <div>
          <LogInForm onSubmit={handleLogin} />
          {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
        </div>
      </main>
    </div>
  );
};

export default LoginPage;

