// Everything in api folder is both accessible to the client and server

const Items = new Mongo.Collection('items');

export default Items;