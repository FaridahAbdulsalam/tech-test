import { SetStateAction, useState } from 'react';
import './App.scss';
import Question from './components/Question';
import ToggleButton from './components/ToggleButton';

function App() {

  const [selectedOption, setSelectedOption] = useState<string>("optionA")

 const handleToggle = (option: string) => {
  setSelectedOption(option);
 }
 

  return (
    <>
    <h1>This app works</h1>
    <Question label={'Which of these colours are primary'}/>
    <ToggleButton optionA={"Blue"} optionB={"Green"} selectedOption={selectedOption} correctAnswer='Green' onToggle={handleToggle} />

    <Question label={'Which of these words are spelt correctly'}/>
    

      </>
  )
}

export default App
