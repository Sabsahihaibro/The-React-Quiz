function NextButton({ dispach, answer, index, numQuestions }) {
  if (answer === null) return;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
