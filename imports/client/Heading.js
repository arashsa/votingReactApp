import React, { Component } from 'react';

export default class Heading extends Component {
    render() {
        return (
            <h1>Count: {this.props.count}</h1>
        )
    }
}