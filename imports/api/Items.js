// Everything in api folder is both accessible to the client and server

const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
    Meteor.publish('allItems', function() {
        return Items.find();
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
        Items.update({ _id: id }, {
            $inc: {
                'itemOne.value': 1
            }
        });
    },
    updateItemTwo: function (id) {
        Items.update({ _id: id }, {
            $inc: {
                'itemTwo.value': 1
            }
        });
    },
});

export default Items;