import React, { Component } from 'react';
// import Heading from './Heading';
import Items from '../api/Items';
import Item from '../client/Item';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
    // every class needs a constructor
    // set state and other variables here
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }
    // // class functions
    // addOne() {
    //     // this in order to access the object state
    //     // object has various methods for setting, getting etc state
    //     this.setState({count: this.state.count + 1})
    // }
    // // this is returned as html from object
    // render() {
    //     // bind method to access state
    //     // Heading is a class that takes a count argument
    //     return (
    //         <header onClick={this.addOne.bind(this)}>
    //             <Heading count={this.state.count}/>
    //         </header>
    //     );
    // }
    clear(event) {
        const valueOne = this.refs.itemOne.value;
        const valueTwo = this.refs.itemTwo.value;
        
        if (valueOne == 'Error' && valueTwo == 'Error') {
            this.refs.itemOne.value = ''
            this.refs.itemTwo.value = ''
        }
    }
    removeAll() {
        Meteor.call('remove');
    }
    addItems(event) {
        event.preventDefault();
        const valueOne = this.refs.itemOne.value;
        const valueTwo = this.refs.itemTwo.value;

        if (valueOne != '' && valueTwo != '' && valueOne != 'Error' && valueTwo != 'Error' && valueOne != valueTwo) {
            Items.insert({
                itemOne: {
                    text: valueOne,
                    value: 0
                },
                itemTwo: {
                    text: valueTwo,
                    value: 0
                }
            });
            this.refs.itemOne.value = ''
            this.refs.itemTwo.value = ''
        } else {
            this.refs.itemOne.value = 'Error'
            this.refs.itemTwo.value = 'Error'
        }
    }
    render() {
        return (
            <div>
            <header>
                <h1>Level Up Voting</h1>
                <form className="item" action="" onSubmit={this.addItems.bind(this)}>
                    <input type="text" ref="itemOne" onClick={this.clear.bind(this)}/>
                    <input type="text" ref="itemTwo" onClick={this.clear.bind(this)}/>
                    <button type="submit">Add items</button>
                </form>

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

export default createContainer(() => {
    return {
        items: Items.find({}).fetch()
    }
}, App);