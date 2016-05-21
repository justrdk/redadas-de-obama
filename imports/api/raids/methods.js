import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Raids } from './raids';

export const addRaid = new ValidatedMethod({
    name: 'raids.add',
    validate: new SimpleSchema({
        address: { type: String, regEx: SimpleSchema.RegEx.ZipCode },
        description: { type: String },
        createdOn: { type: Date },
        geoLocation: { type: Object },
        'geoLocation.lat': { type: Number, decimal: true },
        'geoLocation.lng': { type: Number, decimal: true },
        media: { type: Object },
        'media.images': { type: [Object], optional: true },
        'media.videos': { type: [Object], optional: true}

    }).validator(),
    run({ address, description, createdOn, geoLocation, media }) {
        if (!this.userId) {
            throw new Meteor.Error('Necesita iniciar sesion para realizar esta operacion');
        }

        const raid = {
            address,
            description,
            createdOn,
            geoLocation: {
                lat: geoLocation.lat,
                lng: geoLocation.lng
            },
            userId: this.userId,
            media
        };

        Raids.insert(raid);
    }
});
