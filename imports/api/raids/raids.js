import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Raids = new Mongo.Collection('raids');

Raids.deny({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	}
})

const raidSchema = new SimpleSchema({
  address: { type: String, regEx: SimpleSchema.RegEx.ZipCode },
	description: { type: String },
	createdOn: { type: Date },
	geoLocation: { type: Object },
	'geoLocation.lat': { type: Number, decimal: true },
	'geoLocation.lng': { type: Number, decimal: true },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
	media: { type: Object },
	'media.images': { type: [Object], optional: true },
	'media.videos': { type: [Object], optional: true }
});

Raids.attachSchema(raidSchema);