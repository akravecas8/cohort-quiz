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
      .then((quizData) => {const x = Math.floor(Math.random()*10);
        this.setState({ quizData: quizData, question: quizData[x], usedQuestions: [[quizData[x]]]})})
  }


  setCorrect = () => {
    this.setState({ score: this.state.score + 1 });
  };

  setQuestion = (num) => {
    console.log(num)
    const x = this.state.quizData.splice(num,1)
    console.log(x[0].id)
    console.log(this.state.usedQuestions.includes(x))
    console.log(...this.state.usedQuestions)
    this.state.usedQuestions.includes(x) ? this.getNewRandNum() : this.setState({question: x, usedQuestions: [...this.state.usedQuestions, x]})
  }

  getNewRandNum = () => {
    const z = Math.floor(Math.random()*this.state.quizData.length)
    this.setQuestion(z)
  }


  render() {
    console.log(this.state.question)
    console.log(this.state.usedQuestions)
    const x = Math.floor(Math.random()*10)

    return (
      <div className = "maincont">
        <div className = "test">
        <QuestionContainer question = {this.state.question} quizData = {this.state.quizData} usedQuestions = {this.state.usedQuestions} setCorrect = {this.setCorrect} setQuestion = {this.setQuestion} score = {this.state.score}/>
        </div>
      </div>
    );
  }
}



// question.id.num === this.state.idSelector.slice(-1) {then render the question }

