import { useEffect, useState } from "react";
import "./App.scss";
import Question from "./components/Question";
import ToggleButton from "./components/ToggleButton";
import { questions } from "./questions";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isLocked, setLocked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>(
    "linear-gradient(rgb(245, 169, 118), rgb(230, 93, 15))"
  );

  useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor]);

  const handleToggle = (selectedAnswer: string, index: number) => {
    const updatedAnswers = [...selectedAnswers]; 

    updatedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);

    const correctAnswers = questions[currentQuestion].correctAnswers;

    const allCorrectSelections = updatedAnswers.filter((answer) =>
      correctAnswers.includes(answer)
    ).length;
    

    const percentage = (allCorrectSelections / correctAnswers.length) * 100;
    

    if (percentage === 100) {
      setBackgroundColor(
        "linear-gradient(rgb(169, 246, 252), rgb(14, 191, 223))" //blue gradient
      );
    } else if (percentage >= 75) {
      setBackgroundColor(
        "linear-gradient(rgb(238, 214, 79), rgb(248, 208, 27))" //yellow gradient
      );
    } else if (percentage >= 50) {
      setBackgroundColor(
        "linear-gradient(rgb(247, 177, 46), rgb(247, 103, 7))" //orange gradient
      );
    } else {
      setBackgroundColor(
        "linear-gradient(rgb(245, 169, 118), rgb(230, 93, 15))" //red gradient
      );
    }

    if (percentage === 100) {
      setLocked(true);
      setMessage("The answer is correct");
    } else {
      console.log(updatedAnswers, correctAnswers);
      setMessage("The answer is incorrect");
    }
  };

  const handleNextQuestion = () => {
    const totalQuestions = questions.length;

    if (currentQuestion === totalQuestions - 1) {
      alert("Well done! You have answered all the questions");
    } else if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
      setLocked(false);
      setMessage("");
    }
  };

  return (
    <>
      <Question label={questions[currentQuestion].question} />
      {questions[currentQuestion].sets.map((set, index) => (
        <ToggleButton
          key={index}
          optionA={set.optionA}
          optionB={set.optionB}
          optionC={set.optionC}
          selectedAnswer={selectedAnswers[index]}
          onToggle={(answer) => handleToggle(answer, index)}
          isLocked={isLocked}
        />
      ))}
      {message && <p>{message}</p>}
      <button 
      className="next"
      onClick={handleNextQuestion} disabled={!isLocked}>
        Next
      </button>
    </>
  );
}

export default App;
