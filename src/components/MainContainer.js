import React, { Component } from 'react'
import Questions from './Questions'
import Profile from './Profile'


export default class MainContainer extends Component {
    render() {
        return (
            <div>
                <p>This is a quiz</p>
                <Questions />
                <Profile />
                
            </div>
        )
    }
}
