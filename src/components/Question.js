import React, { Fragment } from "react";
// import Answer from "./Answer";

const Question = (props) => {
 
  console.log(props.question)
  console.log(props.question?.question)
  console.log(props.question?.answers)
  console.log(props.usedQuestions?.length)
  const x = Math.floor(Math.random()*(props.quizData?.length))

  return (
    <Fragment>
      <div>
       <div className="question">{props.question?.question}</div >

        <div className="answers">
          {props.question?.answers.map((answer, idx) => (<ul><li className = "listy"><p key={idx} 
          onClick={() => {answer === props.question?.correctanswer  ? props?.setCorrect(): console.log('gooooooooo');
            props.setQuestion(x);
            console.log('clicked')
          }
            

            
            
            }>{answer}</p></li></ul>))}
        </div>  
      </div>
      

    </Fragment>
  );
};

export default Question;