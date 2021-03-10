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
      <button onClick={props.onClick}>Next Question</button>
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
  const [questionNumber, setQuestionNumber] = useState(quesNum);
  const [selectedAns, setSelectedAns] = useState("notAnswered");
  function goToNextQuestion() {
    let nextQuestionNumber = questionNumber + 1;
    console.log("nextQuestionNumber", nextQuestionNumber);
    setQuestionNumber(nextQuestionNumber);
  }
  let answerIsCorrect = selectedAns == question.correct_choice_index;
  return (
    <div className="app">
      <Question quesTxt={question.text} />
      {question.choices.map((ansChoice, index) => {
        return (
          <Answer
            // make green if question is answered
            className=""
            ansClicked={() => {
              setSelectedAns(index);
            }}
            ansTxt={`${ansChoice}`}
          />
        );
      })}
      {
        // stuff related to next question button
        selectedAns != "notAnswered" ? ( // questions / the conditions
          <div>
            <div>You got it {answerIsCorrect ? "right" : "wrong"}</div>
            <NextQuestion onClick={goToNextQuestion} />
          </div> // yes / true
        ) : null // no / false
      }
    </div>
  );
}

export default App;
