import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

let quesNum = 0;

function Question(props) {
  return <div>{props.quesTxt}</div>;
}

function NextQuestion(props) {
  return <button>Next Question</button>;
}

function App() {
  return <div className="app">
            <Question quesTxt={data[0].question.text}/>
            <NextQuestion />
          </div>;
}

export default App;
