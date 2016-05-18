Meteor.publish('raids.public', function() {
  return Raids.find({
		sort: {createdAt: -1}
  });
});
