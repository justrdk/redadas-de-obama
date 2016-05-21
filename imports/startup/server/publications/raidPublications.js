import { Raids } from '../../../api/raids/raids';

Meteor.publish('allRaids', function () {
	return Raids.find();
});