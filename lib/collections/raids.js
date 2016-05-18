Raids = new Mongo.Collection( 'raids' );

Raids.schema = new SimpleSchema({
  address: {type: String, regEx: SimpleSchema.RegEx.ZipCode},
	description: {type: String},
	createdOn: {type: Date},
	geoLocation: {type: Object},
  userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
	media: {type: Object}
});
