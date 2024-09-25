import "./Question.scss";

type QuestionProps = {
  label: string;
};

const Question = ({ label }: QuestionProps) => {
  return (
    <div>
      <h2>
        {label}
      </h2>
    </div>
  );
};

export default Question;
