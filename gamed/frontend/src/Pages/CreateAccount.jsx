import React, { useState, useEffect } from "react";
import GamEd from "../Component/Card/GamEd";
import CreateAccountForm from "../Layouts/CreateAccountForm";
import "../Styles/CreateAccountPage.css";

function RemoveAside() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Set initial value on mount
    handleResize();

    // Add listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return null; // Or return an empty fragment: <></>;
  }
  return (
    <aside id="create-accountPage-aside">
      <div id="create-accountPage-card-wrapper">
        <GamEd />
      </div>
    </aside>
  );
}

function CreateAccount() {
  return (
    <div className="create-accountBody-wrapper">
      <RemoveAside />
      <main id="create-accountPage-main">
        <CreateAccountForm />
      </main>
    </div>
  );
}

export default CreateAccount;

