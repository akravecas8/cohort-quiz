import React, { Fragment } from "react";
// import Answer from "./Answer";

const Question = (props) => {
 
  console.log(props.question)
  console.log(props.question?.answers)

  return (
    <Fragment>
      <div>
       <div className="question">{props.question?.question}</div >

        <div className="answers">
          {props.question?.answers.map((answer, idx) => (<ul><li className = "listy"><p key={idx} onClick={() => answer === props.question?.correctanswer ? props?.setCorrect() : ""}>{answer}</p></li></ul>))}
        </div>  
      </div>
      

    </Fragment>
  );
};

export default Question;