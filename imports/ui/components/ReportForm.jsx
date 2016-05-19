import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Raids} from '../../api/raids/raids.js';

const style = {
  margin: 12,
};



export default class ReportForm extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
				subscription: {
					raids: Meteor.subscribe('raids')
				}
	    };
	}

	raids() {
		return Raids.find().fetch();
	}

	insertRaid(e) {
		e.preventDefault();

		var geocoder = new google.maps.Geocoder();
    var address = document.getElementById("txtAddress").value;
		var description = document.getElementById("txtDescription").value;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();


						Raids.insert({
							address: address,
							description: description,
							createdOn: new Date(),
							geoLocation: {
								lat: latitude,
								lng: longitude
							},
							media: []
						});

        } else {
            alert("Request failed.")
        }
    });

		// Clear values
		document.getElementById("txtAddress").value = 'Direccion o Codigo Postal';
		document.getElementById("txtDescription").value = 'Describe la redada';

	}

	componentWillUnmount() {

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
