import React, { useState } from "react";
import "./ToggleButton.scss";

type ToggleProps = {
  optionA: string;
  optionB: string;
  optionC?: string;
  selectedAnswer?: string;
  correctAnswer: string[];
  onToggle: (option: string) => void;
  isLocked: boolean;
};

const ToggleButton = ({
  optionA,
  optionB,
  optionC,
  selectedAnswer,
  correctAnswer,
  onToggle,
  isLocked,
}: ToggleProps) => {
  const handleOptionClick = (option: string) => {
    if (!isLocked) {
      onToggle(option);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleOptionClick(optionA)}
        disabled={isLocked}
        style={{
          backgroundColor: selectedAnswer === optionA ? "lightpink" : "white",
        }}
      >
        {optionA}
      </button>

      <button
        onClick={() => handleOptionClick(optionB)}
        disabled={isLocked}
        style={{
          backgroundColor: selectedAnswer === optionB ? "lightpink" : "white",
        }}
      >
        {optionB}
      </button>
    </div>
  );
};

export default ToggleButton;
