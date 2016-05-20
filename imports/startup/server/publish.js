import {Raids} from '../../api/raids/raids';

if(Meteor.isServer){
	Meteor.publish('allRaids', function() {
		return Raids.find();
	});

	Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {
		'profile.getsAlerts': 1
	}});
});

}
