import React, { Component } from 'react';
import Items from '../api/Items';

export default class Item extends Component {
    voteOne() {
        if (Meteor.userId()) {
            Meteor.call('updateItemOne', this.props.item._id);
        }
    }

    voteTwo() {
        if (Meteor.userId()) {
            Meteor.call('updateItemTwo', this.props.item._id);
        }
    }

    render() {
        return (
            <div className='item'>
                <div className='vote-one noselect' onClick={this.voteOne.bind(this)}>
                    <span>{this.props.item.itemOne.value}</span>
                    <h3>{this.props.item.itemOne.text}</h3>
                </div>

                <span>vs</span>

                <div className='vote-two noselect' onClick={this.voteTwo.bind(this)}>
                    <span>{this.props.item.itemTwo.value}</span>
                    <h3>{this.props.item.itemTwo.text}</h3>
                </div>
            </div>
        )
    }
}