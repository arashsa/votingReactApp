import Items from '../imports/api/Items'

Meteor.startup(() => {
    // runs on startup
});

Meteor.methods({ 
    remove: function() { 
        Items.remove({});
    } 
});