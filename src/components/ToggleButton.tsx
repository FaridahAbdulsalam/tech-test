import React, { useState } from 'react'
import "./ToggleButton.scss";

type ToggleProps = {
    optionA: string,
    optionB : string,
    optionC?: string,
    selectedOption: string,
    correctAnswer: string,
    onToggle: (oprion: string) => void;
}

const ToggleButton = ({optionA, optionB, selectedOption, correctAnswer, onToggle} : ToggleProps) => {

    const handleOptionAClick = () => {
        onToggle("optionA")
    }
    const handleOptionBClick = () => {
        onToggle("optionB")
    }

  return (
    <div>
      <button onClick={handleOptionAClick}
      style={{backgroundColor: selectedOption === "optionA" ? 'lightpink' : 'white'}}>
        {optionA}
      </button>
      <button onClick={handleOptionBClick} 
      style={{backgroundColor: selectedOption === "optionB" ? 'lightpink' : 'white'}}>
        {optionB}
      </button>
    </div>
  )
}

export default ToggleButton
