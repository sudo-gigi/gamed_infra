import React from 'react';
import FAQItem from './FAQItem';
import FAQButton from './FAQButton';
import './FAQSection.css';
import underlineIcon from '../../assets/images/Underline_Icon.png';

const questions = [
  { id: 1, text: "Is Gamed a free to use platform?", borderClass: "purple-border" },
  { id: 2, text: "Is Gamed a free to use platform?", borderClass: "gray-border" },
  { id: 3, text: "Is Gamed a free to use platform?", borderClass: "red-border" },
  { id: 4, text: "Is Gamed a free to use platform?", borderClass: "green-border" },
  { id: 5, text: "Is Gamed a free to use platform?", borderClass: "navy-border" },
];

const FAQSection = () => {
  return (
    <>
      {/* Title Header */}
      <div className="faq-header">
        <h2 className="faq-title">
          Frequently Asked{" "}
            <span className="underline-tilt">
            Questions
            <img src={underlineIcon} alt="Underline" className="underline-img" />
          </span>
        </h2>
      </div>

      <section className="faq-section">
        {/* Decorative Circles */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="faq-list">
          {questions.map((question) => (
            <FAQItem key={question.id} text={question.text} borderClass={question.borderClass} />
          ))}
        </div>
        <div className="faq-button">
          <FAQButton>Read More</FAQButton>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
