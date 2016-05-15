Raids = new Mongo.Collection( 'raids' );

Raids.schema = new SimpleSchema({
  zip: {type: String},
	createdOn: {type: String},
	geoLocation: {type: String},
  isActive: {type: Boolean, defaultValue: true},
  userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true}
});
