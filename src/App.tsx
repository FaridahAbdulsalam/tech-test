import { useState } from "react";
import "./App.scss";
import Question from "./components/Question";
import ToggleButton from "./components/ToggleButton";
import { questions } from "./questions";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isLocked, setLocked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleToggle = (selectedAnswer: string, index: number) => {
    const updatedAnswers = [...selectedAnswers];
    console.log(`"previous option:" ${updatedAnswers}`);
    
    updatedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);
      

    const correctAnswers = questions[currentQuestion].correctAnswers;
    const allCorrect = correctAnswers.every((answer) => updatedAnswers.includes(answer))

    console.log(`correct array: ${correctAnswers}, users answers: ${updatedAnswers}`);

    if (allCorrect) {
      setLocked(true);
      setMessage("The answer is correct")
    }else{
      console.log(updatedAnswers, correctAnswers);
      setMessage("The answer is incorrect")
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
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
