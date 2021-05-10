import React, { Component } from 'react'
import Answer from './Answer'
import NextButton from './NextButton'

export default class Questions extends Component {
    render() {
        return (
            <div>
               <p>We have questions</p> 
               <Answer />
               <NextButton setRandomQuestion={this.props.setRandomQuestion} />
            </div>
        )
    }
}
