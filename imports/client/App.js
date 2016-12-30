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
    addItems(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
            <header>
                <h1>Level Up Voting</h1>
                <form action="" onSubmit={this.addItems}>
                    <input type="text"/>
                    <input type="text"/>
                    <button type="submit">Add items</button>
                </form>
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