import {Raids} from '../../api/raids/raids';

if(Meteor.isServer){
	Meteor.publish('allRaids', function() {
		return Raids.find();
	});

	Meteor.publish(null, function() {
		if (this.userId ) {
			return Meteor.users.find({_id: this.userId}, {fields: {
				getsAlerts: 1
			}});
		} else {
			return null;
		}

});

}
