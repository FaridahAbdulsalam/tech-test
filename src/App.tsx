import { useState } from 'react';
import './App.scss';
import Question from './components/Question';
import ToggleButton from './components/ToggleButton';
import { questions } from './questions';

function App() {

  const [selectedOption, setSelectedOption] = useState<string>("")
  const [currentQuestion, setCurrentQuestion] = useState<number>(2)
  const [isLocked, setLocked] = useState<boolean>(false)

 const handleToggle = (option: string) => {
  setSelectedOption(option);
 }
 

  return (
    <>
    <h1>This app works</h1>
    <Question label={questions[currentQuestion].question}/>
    <ToggleButton optionA={questions[currentQuestion].options[0]} optionB={questions[currentQuestion].options[1]}  selectedOption={selectedOption} correctAnswer={questions[currentQuestion].correctAnswers} onToggle={handleToggle} />   

      </>
  )
}

export default App
