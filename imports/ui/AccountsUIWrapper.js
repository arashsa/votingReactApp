import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 
export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // This is the regular Blaze rendering.
    // Now a Meteor.userId() function exists that returns a string for each user.
    // Use this string for the RiveScript object in order to handle individual users.
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Remove the view component from Blaze
    Blaze.remove(this.view);
  }
  render() {
    // Placeholder -- no functionality
    return <span ref="container" />;
  }
}