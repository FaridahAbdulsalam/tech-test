import { useState } from "react";
import "./App.scss";
import Question from "./components/Question";
import ToggleButton from "./components/ToggleButton";
import { questions } from "./questions";

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isLocked, setLocked] = useState<boolean>(false);

  const handleToggle = (selectedAnswer: string, index: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);

    const correctAnswers = questions[currentQuestion].correctAnswers;
    if (correctAnswers.every((answer) => updatedAnswers.includes(answer))) {
      setLocked(true);
    }
  };

  return (
    <>
      <h1>This app works</h1>
      <Question label={questions[currentQuestion].question} />
      {questions[currentQuestion].sets.map((set, index) => (
        <ToggleButton
          key={index}
          optionA={set.optionA}
          optionB={set.optionB}
          selectedAnswer={selectedAnswers[index]}
          onToggle={(answer) => handleToggle(answer, index)}
          isLocked={isLocked}
        />
      ))}
    </>
  );
}

export default App;
