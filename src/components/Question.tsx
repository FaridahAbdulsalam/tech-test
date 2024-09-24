type QuestionProps = {
  label: string;
};

const Question = ({ label }: QuestionProps) => {
  return (
    <div>
      <h2
        style={{
          color: "white",
          fontSize: "30px",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        {label}
      </h2>
    </div>
  );
};

export default Question;
