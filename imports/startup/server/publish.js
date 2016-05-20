import {Raids} from '../../api/raids/raids';

if(Meteor.isServer){
	Meteor.publish('allRaids', function() {
		return Raids.find();
	});
}
