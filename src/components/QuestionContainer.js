import React, { Fragment } from "react";
import Question from "./Question";
import Score from "./Score"

const QuestionContainer = (props) => {
  // const quizData = props.quizData;
  // const id = props.id;
  console.log(props.question)
 
  const randomNum = Math.floor(Math.random()*props.quizData.length)

  
  // props.quizData[randomNum]
  return (
    <Fragment>
      <div className="scores">{props.usedQuestions.length == 11 ? <Score score = {props.score}/>: null}</div>
      <div className="question-container">
      <Question key = {props.question.id} question = {props.question} setCorrect = {props.setCorrect} setQuestion = {props.setQuestion} quizData = {props.quizData} score = {props.score} usedQuestions = {props.usedQuestions}/>
      </div>
    </Fragment>
  );
};

export default QuestionContainer;

//hi