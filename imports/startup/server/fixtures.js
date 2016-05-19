if( false ) {

	console.log(Raids.find().count());

	Raids.insert( {
		address: '85004',
		description: 'Checkpoint on the I-10 exit on 7th Ave.',
		createdOn: new Date(),
		geoLocation: {lat: '33.4508101', lng: '-112.0890755'},
		media: {images:[],videos:[]}
	});

	Raids.insert( {
		address: '90248',
		description: 'Near the 110 and the 91',
		createdOn: new Date(),
		geoLocation: {lat: '33.8779559', lng: '-118.3218999'},
		media: {images:[],videos:[]}
	});

	Raids.insert( {
		address: '02142',
		description: 'Near downtown Boston',
		createdOn: new Date(),
		geoLocation: {lat: '42.3614911', lng: '-71.0919947'},
		media: {images:[],videos:[]}
	});

	Raids.insert( {
		address: '77023',
		description: 'Near the Kroger on Clay Street.',
		createdOn: new Date(),
		geoLocation: {lat: '29.7368558', lng: '-95.3450495'},
		media: {images:[],videos:[]}
	});


}
