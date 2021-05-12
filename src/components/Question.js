import React, { Fragment } from "react";
import Answer from "./Answer";

const Question = (props) => {
  const question = props.question.question;
  const answers = props.question.answers;
  const correctanswer = props.question.correctanswer;
  console.log(props);

  return (
    <Fragment>
    <div className = "questholder">
      <div className="question">
        <span>{question}</span>
      </div>
        <div className="answers">
          {answers.map((answer, idx) => (
            <p
              key={idx}
              onClick={() =>
                answer === correctanswer ? props.setCorrect() : ""
              }
            >
              {answer}
            </p>
          ))}
        </div>
    </div>
    </Fragment>
  );
};

export default Question;
