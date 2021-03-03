import React, { Component, useState } from "react";
import { createPropertySignature } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

let quesNum = 0;

function Question(props) {
  return <div>{props.quesTxt}</div>;
}

function NextQuestion(props) {
  return (
    <div>
      <button>Next Question</button>
    </div>
  );
}

function Answer(props) {
  return (
    <button onClick={props.ansClicked} class={`${props.className} ansButton`}>
      {props.ansTxt}
    </button>
  );
}

function App() {
  const question = data[0].question;
  const [selectedAns, setSelectedAns] = useState("notAnswered");
  return (
    <div className="app">
      <Question quesTxt={question.text} />
      {question.choices.map((ansChoice) => (
        <Answer
          // make green if question is answered
          className={}
          ansClicked={() => {
            setSelectedAns("isAnswered");
          }}
          ansTxt={ansChoice}
        />
      ))}
      {selectedAns}
      {
        // stuff related to next question button
        selectedAns === "isAnswered" ? ( // questions / the conditions
          <NextQuestion /> // yes / true
        ) : null // no / false
      }
    </div>
  );
}

export default App;
