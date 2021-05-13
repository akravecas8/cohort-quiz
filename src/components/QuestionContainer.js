import React, { Fragment } from "react";
import Question from "./Question";

const QuestionContainer = (props) => {
  // const quizData = props.quizData;
  // const id = props.id;
 
  const randomNum = Math.floor(Math.random()*props.quizData.length)
  const startMe = props.usedQuestions.length === 0 ? props.quizData[randomNum] : props.question[0]

  return (
    <Fragment>
      <div className="question-container">
      <Question id = {props.question.id} question = {startMe} setCorrect = {props.setCorrect}/>
      </div>
    </Fragment>
  );
};

export default QuestionContainer;

//hi