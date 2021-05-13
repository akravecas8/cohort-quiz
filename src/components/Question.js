import React, { Fragment } from "react";
// import Answer from "./Answer";

const Question = (props) => {
  // const question = props.question.question;
  // const answers = props.question.answers;
  // const correctanswer = props.question.correctanswer;
  // console.log(props);
  
  console.log(props.question)

  return (
    <Fragment>
      <div>
       <div className="question">{props.question?.question}</div >

        <div className="answers">
          {props.question?.answers.map((answer, idx) => (<ul><li className = "listy"><p key={idx} onClick={() => answer === props.correctanswer ? props.setCorrect() : ""}>{answer}</p></li></ul>))}
        </div>  
      </div>
      

    </Fragment>
  );
};

export default Question;