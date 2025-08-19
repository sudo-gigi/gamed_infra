import React from 'react';
import './FAQButton.css';

const FAQButton = ({ children }) => {
  return (
    <button className="custom-button">
      {children}
    </button>
  );
};

export default FAQButton;