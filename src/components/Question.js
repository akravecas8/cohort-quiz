import React, { Fragment } from "react";
import Score from "./Score";

const Question = (props) => {
 
  console.log(props.question)
  console.log(props.question?.question)
  console.log(props.question?.answers)
  const x = Math.floor(Math.random()*(props.quizData?.length))
  console.log(x)

  return (
    <Fragment>
      <div>
       <div className="question">{props.question?.question}</div >

       {/* <div className="answers">{typeof(props.question?.answers)}</div > */}

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