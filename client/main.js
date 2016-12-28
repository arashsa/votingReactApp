import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});

class App extends Component {
    render() {
        return (
            <h1>Hello world!</h1>
        );
    }
}