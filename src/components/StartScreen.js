function StartScreen({ numQuestions, dispach }) {
  return (
    <div className="start">
      <h1>Welcome to The React Quiz</h1>
      <h3>{numQuestions} Questions to test your React mastery!</h3>
      <button className="btn btn-ui" onClick={() => dispach({ type: "start" })}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
