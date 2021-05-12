import React, { Fragment } from "react";
import Question from "./Question";

const Questions = (props) => {
  const quizData = props.quizData;
  const id = props.id;

  return (
    <Fragment>
      <div className="question-container">
        {quizData[id] ? (
          <Question
            key={id}
            question={quizData[id]}
            setCorrect={props.setCorrect}
          />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default Questions;
