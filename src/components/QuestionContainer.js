import React, { Fragment } from "react";
import Question from "./Question";

const QuestionContainer = (props) => {
  // const quizData = props.quizData;
  // const id = props.id;
  console.log('yo')
 
  const randomNum = Math.floor(Math.random()*props.quizData.length)
  

  return (
    <Fragment>
      <div className="question-container">
      <Question key = {props.question.id} question = {props.quizData[randomNum]} setCorrect = {props.setCorrect} setQuestion = {props.setQuestion} />
      </div>
    </Fragment>
  );
};

export default QuestionContainer;

//hi