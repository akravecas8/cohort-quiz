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

  setRandomQuestion = () => {
    const y = Math.floor(Math.random()*this.state.quizData.length)
    let i = 0;
    if (this.state.idSelector.length==this.state.quizData)
    for (i = 0; i < 11; i ++) {
        if (!this.state.idSelector.includes(y)) {
            this.setState({idSelector: [...this.state.idSelector, y]});
        } else {console.log('yo')}
    }
}

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



// question.id.num === this.state.idSelector.slice(-1) {then render the question }

