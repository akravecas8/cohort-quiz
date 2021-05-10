import React, { Component } from 'react'
import Questions from './Questions'
import Profile from './Profile'


export default class MainContainer extends Component {

    state = {
        quizData:[],
        question: [],
        answer: [],
        score: 0,
        correctAnswers: []

    }

    componentDidMount(){
        fetch("http://localhost:3000/Questions")
        .then(r => r.json())
        .then(quizData => this.setState({quizData: quizData}))
    }

    setRandomQuestion = (randomQuestion) => {
        this.setState({question :randomQuestion})
    }

    render() {
        return (
            <div>
                <p>This is a quiz</p>
                <Questions setRandomQuestion={this.setRandomQuestion} />
                <Profile />
                
            </div>
        )
    }
}
