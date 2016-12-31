import Items from '../imports/api/Items';

Meteor.methods({ 
    remove: function() { 
        Items.remove({});
    } 
});