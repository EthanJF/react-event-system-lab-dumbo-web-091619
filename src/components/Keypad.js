// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    writeText = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <input type="password" onKeyUp={this.writeText}/>
        )
    }
}