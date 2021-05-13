import React from 'react'

export default function NextButton(props) {
    const x = Math.floor(Math.random()*(props.quizData.length))
    // console.log(props.quizData.length)
    return (
        <div>
            <button className="Next" onClick = {()=>props.setQuestion(x)}>Next</button>
        </div>
    )
}
