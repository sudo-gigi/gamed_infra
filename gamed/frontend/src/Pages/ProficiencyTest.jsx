import React, { useState, useEffect } from "react";
import "../Styles/ProficiencyTest.css";
import { useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

const questions = [
  {
    question: "What is HTML used for?",
    options: ["Styling", "Structure", "Database", "Logic"],
    correctAnswer: "Structure",
  },
  {
    question: "Which language styles a webpage?",
    options: ["JavaScript", "HTML", "CSS", "Python"],
    correctAnswer: "CSS",
  },
  {
    question: "Which tag is used for a paragraph in HTML?",
    options: ["<h1>", "<div>", "<p>", "<span>"],
    correctAnswer: "<p>",
  },
];

const ProficiencyTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          handleSubmit(); // auto-submit on timeout
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(""); // Reset selection for next question
    } else {
      handleSubmit(); // Submit after last question
    }
  };

  const handleSubmit = () => {
    const finalScore =
      selectedOption === questions[currentQuestion].correctAnswer
        ? score + 1
        : score;
  
    if (finalScore >= 1) {
      navigate("/test-success", { state: { score: finalScore } });
    } else {
      navigate("/test-failure", { state: { score: finalScore } });
    }
  };
  

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="proficiency-test-container">
      <h2 className="proficiency-test-title">KNOWLEDGE PROFICIENCY TEST</h2>

      <div className="test-info">
        <span>The Coders Test</span>

        <div className="test-progress-bar">
          <div
            className="test-progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="test-timer">
          <FaRegClock />
          {formatTime(timer)}
        </div>
      </div>

      <div className="question-section">
        <div className="question-number">
          {currentQuestion + 1}/{questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].question}</div>
      </div>

      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <label
            key={index}
            className={`option ${selectedOption === option ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <button className="next-btn" onClick={handleNext}>
        Submit
      </button>
    </div>
  );
};

export default ProficiencyTest;

