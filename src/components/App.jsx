import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

let quesNum = 0;

function Question(props) {
  return <div>{props.quesTxt}</div>;
}

function NextQuestion(props) {
  return <div><button>Next Question</button></div>;
}

function Answer(props) {
  return <button>{props.ansTxt}</button>;
}

function App() {
  const question = data[0].question;
  const [ correctAns, setCorrectAns] = useState(false);
  return (
    <div className="app">
      <Question quesTxt={question.text} />
      {question.choices.map((ansChoice) => (
        <Answer ansTxt={ansChoice} />
      ))}
      <NextQuestion />
    </div>
  );
}

export default App;
