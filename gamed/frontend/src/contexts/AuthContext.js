import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  // Automatically fetch user info if token exists (optional enhancement)
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      // Optionally fetch user profile here using the token if backend supports it
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch("https://use-gamed.ddns.net/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        return { success: false, error: data.message || "Login failed" };
      }

      // Save token and user info
      localStorage.setItem("token", data.access_token);
      setToken(data.access_token);
      setUser(data.data);
      setIsAuthenticated(true);

      return { success: true, user: data.data };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Something went wrong" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
