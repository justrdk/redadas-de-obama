import React, { Component } from 'react';
import { mount } from 'react-mounter';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Raids } from '../../api/raids/raids.js';
import { addRaid } from '../../api/raids/methods.js';

const style = {
  margin: 12,
};

export default class ReportForm extends TrackerReact(Component) {

	constructor(props) {
	    super(props);
	    this.state = {
			subscription: {
				raids: Meteor.subscribe('allRaids')
			}
	    };
	}

	raids() {
		return Raids.find().fetch();
	}

	insertRaid(e) {
		e.preventDefault();

		const geocoder = new google.maps.Geocoder();
    	const address = document.getElementById("txtAddress").value;
		const description = document.getElementById("txtDescription").value;

		geocoder.geocode({ 'address': address }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				const latitude = results[0].geometry.location.lat();
				const longitude = results[0].geometry.location.lng();
				
				addRaid.call({
					address,
					description,
					createdOn: new Date(),
					geoLocation: { lat: latitude, lng: longitude },
					media: {}
				}, (err) => {
					if (err && err.error) {
						return err.error;
					}
					// console.log('Submission was a success: ' + data);		
				});
			} else {
				alert("Request failed. Could not GeoCode the location based on your input. Try submitting a Zip Code");
			}
		});

		// Clear values
		document.getElementById("txtAddress").value = 'Direccion o Codigo Postal';
		document.getElementById("txtDescription").value = 'Describe la redada';

	}

	componentWillUnmount() {
		this.state.subscription.raids.stop();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.insertRaid}>
					<TextField hintText="Describe la redada" id="txtDescription" />
					<TextField hintText="Direccion o Codigo Postal" id="txtAddress" />

					<RaisedButton type="submit" className="report-submit" label="Reporta" primary={true} style={style} />
				</form>


			</div>
		)
	}
}
