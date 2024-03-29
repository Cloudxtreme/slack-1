Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "rod",
    email: "rod@example.com",
    password: "123456"
  });

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
  });

  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(5).times(function(n) {
      Factory.create('message');
    });
  }

  Channels.remove({});
  Channels.insert({
    name: "general"
  });
  Channels.insert({
    name: "random"
  });
});