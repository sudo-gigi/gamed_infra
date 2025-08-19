import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after logout
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook from AuthContext
import '../Styles/Logoutdropdown.css'; // Import your CSS file
import dummyProfile from "../assets/images/dummy-profile-picture.svg";

function LogoutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth(); // Access user and logout function from context
  const navigate = useNavigate(); // For redirecting after logout
  
  const username = user?.username || 'User'; // Access the username from the user object

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleLogout = () => {
    // Call the logout function from AuthContext to clear user data and token
    logout();
    
    // Redirect to login page after logout
    navigate('/login'); // Make sure '/login' is the correct route
  };

  return (
    <React.Fragment>
      <img className="profile" src={dummyProfile} alt='User Profile'></img>
      <div ref={dropdownRef} className="relative inline-block">
        <div onClick={() => setIsOpen(!isOpen)}>
          <button className="custom-ghost-button">
            {/* Display the username dynamically */}
            {username}
          </button>
          <div className="custom-dropdown-content" style={{ display: isOpen ? 'block' : 'none' }}>
            <div
              onClick={handleLogout}
              className="custom-dropdown-item"
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogoutDropdown;

