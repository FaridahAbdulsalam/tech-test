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
  } else if (selectedAnswer === optionC) {
    indicatorPosition = "translateX(200%)";
  }

  const indicatorWidth = optionC ? "33%" : "50%";

  return (
    <div className="toggle-button-container">
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

      {optionC && (
        <button
          className={`tab ${selectedAnswer === optionC ? "active" : ""}`}
          onClick={() => handleOptionClick(optionC)}
          disabled={isLocked}
        >
          {optionC}
        </button>
      )}

      {selectedAnswer && (
        <div
          className="indicator"
          style={{ transform: indicatorPosition, width: indicatorWidth }}
        />
      )}
    </div>
  );
};

export default ToggleButton;

// style={{
//     backgroundColor: selectedAnswer === optionB ? "lightpink" : "white",
//   }}
