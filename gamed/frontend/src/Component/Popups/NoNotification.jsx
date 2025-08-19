import React, { useState } from "react";
import "../../Styles/NoNotificationPopUpStyles.css";

function NoNotification({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    setIsVisible(true);
  };

  const hidePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div onClick={showPopup} style={{ cursor: "pointer" }}>
        {children}
      </div>
      {isVisible && (
        <div className="no-notifications-popup-container">
          <div className="no-notifications-popup-content">
            No Notifications{" "}
            <button
              variant="ghost"
              className="custom-close-button"
              onClick={hidePopup}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NoNotification;
