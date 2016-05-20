import {Raids} from './raids';

Meteor.methods({
	addRaid(data) {
		Raids.insert({
			address: data.address,
			description: data.description,
			createdOn: data.createdOn,
			geoLocation: {
				lat: data.geoLocation.lat,
				lng: data.geoLocation.lng
			},
			media: data.media
		});
	}
});
