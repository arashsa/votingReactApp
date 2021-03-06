import React, { Component } from 'react';
import Items from '../api/Items';
import Item from '../client/Item';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from '../ui/AccountsUIWrapper.js';

class App extends Component {
    clear(event) {
        const valueOne = this.refs.itemOne.value;
        const valueTwo = this.refs.itemTwo.value;

        if (valueOne == 'Error' && valueTwo == 'Error') {
            this.refs.itemOne.value = ''
            this.refs.itemTwo.value = ''
        }
    }
    removeAll() {
        if (Meteor.userId())
            Meteor.call('remove');
    }
    removeOne(id) {
        Meteor.call('removeOne', id);
    }
    addItems(event) {
        event.preventDefault();

        if (!Meteor.userId())
            return;

        const valueOne = this.refs.itemOne.value;
        const valueTwo = this.refs.itemTwo.value;

        if (valueOne != '' && valueTwo != '' && valueOne != 'Error' && valueTwo != 'Error' && valueOne != valueTwo) {
            Meteor.call('insert', valueOne, valueTwo, (err, res) => {
                if (!err) {
                    this.refs.itemOne.value = ''
                    this.refs.itemTwo.value = ''
                }
            });
            document.getElementById('1').focus()
        } else {
            this.refs.itemOne.value = 'Error'
            this.refs.itemTwo.value = 'Error'
        }
    }

    showAll() {
        Session.set('showAll', !Session.get('showAll'));
    }

    render() {

        // Loading screen
        if (!this.props.ready) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <header>
                    <h1>Chatbot Login</h1>
                    <AccountsUIWrapper />
                    <button onClick={this.showAll}>Show {this.props.showAll ? 'One' : 'All'}</button>

                    <form className="item" type="submit" onSubmit={this.addItems.bind(this)}>
                        <input id="1" type="text" ref="itemOne" onClick={this.clear.bind(this)} />
                        <input type="text" ref="itemTwo" onClick={this.clear.bind(this)} />
                        <button style={{ position: "absolute", left: "-9999px" }}></button>
                    </form>

                    <button type="submit" onClick={this.addItems.bind(this)}>Add items</button>
                    <button type="submit" onClick={this.removeAll}>Remove All</button>

                    <main>
                        {this.props.items.map((item) => {
                            return <Item item={item} key={item._id} />
                        })}
                    </main>
                </header>
            </div>
        )
    }
}

Meteor.startup(function () {
    Session.set('showAll', false);
});

// Container to grab data for components
export default createContainer(() => {
    // The subsrciption now access the items
    let itemsSub = Meteor.subscribe('allItems');
    let showAll = Session.get('showAll');
    return {
        ready: itemsSub.ready(),
        items: Items.find({}, {
            limit: showAll ? 50 : 1,
            sort: { lastUpdated: 1 }
        }).fetch(),
        showAll: showAll
    }
}, App);