import React from 'react'

export default function NextButton(props) {
    const x = Math.floor(Math.random()*(props.quizData.length))
    return (
        <div>
            <button onClick = {()=>{
                if (props.usedQuestions?.length < 11){
                    props.setQuestion(x)}
                    else {
                        alert(`You scored ${props.score} points`)
                    }
                
                }}>Next</button>
        </div>
    )
}
