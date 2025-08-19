import React, { useState, useEffect } from "react";
import "../Styles/TrackSelectionStyles.css";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const tracks = [
  {
    title: "BACK-END WEB DEVELOPMENT",
    description: "Assess your skills in databases, APIs, authentication...",
  },
  {
    title: "FRONT-END WEB DEVELOPMENT",
    description: "Test your HTML, CSS, JavaScript and framework knowledge...",
  },
  {
    title: "PRODUCT DESIGN",
    description: "Wireframing, prototyping, user-centered design...",
  },
  {
    title: "PRODUCT MANAGEMENT",
    description: "MVPs, stakeholder communication, roadmaps...",
  },
];

const TrackSelection = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="track-selection-spinner-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="track-selection-container">
      <h2> Hey {user?.username}, choose a track to get started</h2>
      <p>Welcome to GAMED</p>
      <p>Select your preferred course path below and take a quick test</p>
      <div className="track-cards-wrapper">
        {tracks.map((track, index) => (
          <div className="track-card" key={index}>
            <h3>{track.title}</h3>
            <p>{track.description}</p>

            {track.title === "FRONT-END WEB DEVELOPMENT" ? (
              <Link to="/proficiency-test">
                <button className="start-test-btn">Start Test</button>
              </Link>
            ) : (
              <button className="start-test-btn" disabled>
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackSelection;

