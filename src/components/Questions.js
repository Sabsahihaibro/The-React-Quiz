import Options from "./Options";

function Questions({ questions, dispach, answer }) {
  return (
    <div>
      <h4 className="">{questions.question}</h4>
      <Options questions={questions} dispach={dispach} answer={answer} />
    </div>
  );
}

export default Questions;
