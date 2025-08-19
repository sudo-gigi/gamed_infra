import React from 'react';
import './FAQSection.css';

const FAQItem = ({ text, borderClass }) => {
  return (
    <div className={`faq-item ${borderClass}`}>
      <p className="faq-question">{text}</p>
      <span className="chevron">&#8963;</span>
    </div>
  );
};

export default FAQItem;