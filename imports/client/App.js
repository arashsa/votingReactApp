import React, { Component } from 'react';

let hello = 0;

export default class App extends Component {
    addOne() {
        console.log(hello)
        hello += 1;
    }
    render() {
        return (
            <h1 onClick={this.addOne}>Hello! Number: {hello} </h1>
        );
    }
}