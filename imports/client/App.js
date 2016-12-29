import React, { Component } from 'react';
import Heading from './Heading';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    addOne() {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <header onClick={this.addOne.bind(this)}>
                <Heading count={this.state.count}/>
            </header>
        );
    }
}