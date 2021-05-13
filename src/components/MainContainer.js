import React, { Component } from "react";
import Profile from "./Profile";
import NextButton from "./NextButton";
import QuestionContainer from "./QuestionContainer"

export default class MainContainer extends Component {
  state = {
    id: 1,
    quizData: [],
    question: [],
    usedQuestions:[],
    answers: [],
    correctanswer: "",
    score: 0,
    currentIndex: 0,
    correct: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/Questions")
      .then((r) => r.json())
      .then((quizData) => this.setState({ quizData: quizData }))
  }


  setCorrect = () => {
    this.setState({ score: this.state.score + 1 });
  };

  setQuestion = (num) => {
    const x = this.state.quizData.splice(num,1)
    this.state.usedQuestions.includes(x) ? this.getNewRandNum() : this.setState({question: x, usedQuestions: [...this.state.usedQuestions, x]
    })
  }

  getNewRandNum = () => {
    const z = Math.floor(Math.random()*this.state.quizData.length)
    this.setQuestion(z)
  }


  render() {
    console.log(this.state.question)
    console.log(this.state.usedQuestions)

    return (
      <div className = "maincont">
        <Profile/>
        <p>This is a quiz</p>
        <div className = "test">
        <QuestionContainer question = {this.state.question} quizData = {this.state.quizData} usedQuestions = {this.state.usedQuestions} setCorrect = {this.setCorrect}/>
        </div>
        <div className ="button">
        <NextButton quizData = {this.state.quizData} setQuestion = {this.setQuestion} usedQuestions = {this.state.usedQuestions} score = {this.state.score}/>
          </div>
      </div>
    );
  }
}



// question.id.num === this.state.idSelector.slice(-1) {then render the question }

