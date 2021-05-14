import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div>
                <p>{`You Scored ${this.props.score} Points`}</p>
            </div>
        )
    }
}
