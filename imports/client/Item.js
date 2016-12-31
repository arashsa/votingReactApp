import React, { Component } from 'react';
import Items from '../api/Items';

export default class Item extends Component {
    voteOne() {
        if (Meteor.userId()) {
            Items.update({ _id: this.props.item._id }, {
                $inc: {
                    'itemOne.value': 1
                }
            });
        }
    }

    voteTwo() {
        if (Meteor.userdID()) {
            Items.update({ _id: this.props.item._id }, {
                $inc: {
                    'itemTwo.value': 1
                }
            });

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