const Tests = new Mongo.Collection('tests')

Meteor.startup(() => {
    Tests.insert({a: 10, b: 20})
});