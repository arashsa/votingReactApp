// Everything in api folder is both accessible to the client and server

const Items = new Mongo.Collection('items');

Meteor.methods({ 
    remove: function() { 
        Items.remove({});
    },
    insert: function(valueOne, valueTwo) {
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
    },
});

export default Items;