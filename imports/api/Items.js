// Everything in api folder is both accessible to the client and server

const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
    // return data that the client can subscribe to
    Meteor.publish('allItems', function() {
        // Limit what you push out from database in order to leve load.
        return Items.find({}, { limit: 50, sort: { lastUpdated: 1 } });
    });
}

Meteor.methods({
    remove: function () {
        Items.remove({});
    },
    insert: function (valueOne, valueTwo) {
        check(valueOne, String);
        check(valueTwo, String);
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
    updateItemOne: function (id) {
        let lastUpdated = new Date();
        Items.update({ _id: id }, {
            $inc: {
                'itemOne.value': 1
            },
            $set: {
                lastUpdated: lastUpdated
            }
        });
    },
    updateItemTwo: function (id) {
        let lastUpdated = new Date();
        Items.update({ _id: id }, {
            $inc: {
                'itemTwo.value': 1
            },
            $set: {
                lastUpdated: lastUpdated
            }
        });
    },
});

export default Items;