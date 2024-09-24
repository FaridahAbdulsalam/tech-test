import React, { useState } from "react";
import "./ToggleButton.scss";

type ToggleProps = {
  optionA: string;
  optionB: string;
  optionC?: string;
  selectedAnswer?: string;
  onToggle: (option: string) => void;
  isLocked: boolean;
};

const ToggleButton = ({
  optionA,
  optionB,
  optionC,
  selectedAnswer,
  onToggle,
  isLocked,
}: ToggleProps) => {
  const handleOptionClick = (option: string) => {
    if (!isLocked) {
      onToggle(option);
    }
  };

  let indicatorPosition = "translateX(0%)";

  if (selectedAnswer === optionB) {
    indicatorPosition = "translateX(100%)";
  }

  return (
    <div className="toggle-button-container">

      {selectedAnswer && (
        <div className="indicator" style={{transform: indicatorPosition }} />
      )}

      <button
        className={`tab ${selectedAnswer === optionA ? "active" : ""}`}
        onClick={() => handleOptionClick(optionA)}
        disabled={isLocked}
      >
        {optionA}
      </button>

      <button
        className={`tab ${selectedAnswer === optionB ? "active" : ""}`}
        onClick={() => handleOptionClick(optionB)}
        disabled={isLocked}
      >
        {optionB}
      </button>
    </div>
  );
};

export default ToggleButton;

// style={{
//     backgroundColor: selectedAnswer === optionB ? "lightpink" : "white",
//   }}
