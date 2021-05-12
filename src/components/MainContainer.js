import React, { Component } from "react";
import Questions from "./QuestionContainer";
import Profile from "./Profile";

export default class MainContainer extends Component {
  state = {
    id: 1,
    quizData: [],
    question: [],
    answers: [],
    correctanswer: "",
    score: 0,
    currentIndex: 0,
    correct: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/Questions")
      .then((r) => r.json())
      .then((quizData) => this.setState({ quizData: quizData }));
  }

  setCorrect = () => {
    this.setState({ correct: true });
  };

  setRandomQuestion = (randomQuestion) => {
    this.setState({ question: randomQuestion });
  };

  render() {
    return (
      <div>
        <p>This is a quiz</p>
        <Questions
          quizData={this.state.quizData}
          id={this.state.id}
          setCorrect={this.setCorrect}
        />
        <Profile />
      </div>
    );
  }
}
