import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const coords = {
  lat: 39.6630348,
  lng: -98.9540999
};

//const Raids = Meteor.subscribe('raids.public');

export default class RaidMap extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
	      markers: Raids.find().fetch()
	    };
	}

	raids() {
		return Raids.find().fetch();
	}

	onMapCreated(map) {
	    map.setOptions({
	      disableDefaultUI: true
	    });

			this.setState = {
	      markers: Raids.find().fetch()
	    };
	  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

	render() {

		return (
			<Gmaps
        width={'100%'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={4}
        loadingMessage={'Resist.'}
        params={{
					v: '3.exp',
					key: 'AIzaSyAME4t3G4A-annYQdxTHTMYjBw8ZURl5xA'
				}}
        onMapCreated={this.onMapCreated}>

					{this.raids().map((raid) => <Marker lat={raid.geoLocation.lat} lng={raid.geoLocation.lng} draggable={false} key={raid._id} />)}

      </Gmaps>
		)
	}
}
