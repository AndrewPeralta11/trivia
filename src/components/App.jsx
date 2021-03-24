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
  let intialAns = "notAnswered";
  const [questionNumber, setQuestionNumber] = useState(quesNum);
  // const question = data[questionNumber].question;
  let questionData = data[questionNumber];
  const question = questionData ? questionData.question : null;
  const [selectedAns, setSelectedAns] = useState(intialAns);
  function resetQuestion() {
    setSelectedAns(intialAns);
  }
  function goToNextQuestion() {
    resetQuestion();
    let nextQuestionNumber = questionNumber + 1;
    setQuestionNumber(nextQuestionNumber);
  }
  // parameter => body
  let answerIsCorrect = () => selectedAns == question.correct_choice_index;
  // var name =
  let userPickedAns = selectedAns != "notAnswered";
colors = ['bl']
  let QuestionContent = () => (
    <div>
      <Question quesTxt={question.text} />
      {question.choices.map((ansChoice, index) => {
        const isThisAnswerCorrect = question.correct_choice_index == index;
        let className = isThisAnswerCorrect ? "right" : "wrong";
        let classNameIfAnswered = userPickedAns ? className : "";
        return (
          <Answer
            // make green if question is answered
            className={classNameIfAnswered}
            ansClicked={() => {
              setSelectedAns(index);
            }}
            ansTxt={`${ansChoice}`}
          />
        );
      })}
      {
        // stuff related to next question button
        userPickedAns ? ( // questions / the conditions
          <div>
            <div>You got it {answerIsCorrect() ? "right" : "wrong"}</div>
            <NextQuestion onClick={goToNextQuestion} />
          </div> // yes / true
        ) : null // no / false
      }
    </div>
  );
  return (
    <div className="app">
      {question ? (
        <QuestionContent />
      ) : (
        <div> You Have Answered All the Questions for Today! </div>
      )}
    </div>
  );
}

export default App;
