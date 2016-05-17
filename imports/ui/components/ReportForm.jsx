import React, { Component } from 'react';
import {mount} from 'react-mounter';

import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ReportForm extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {

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

	}

	render() {
		return (
			<div>
				<form onSubmit={this.insertRaid}>
					<input id="txtDescription" type="text" placeholder="Describe the raid" />
					<input id="txtAddress" type="text" placeholder="Zip Code" />

					<input type="submit" className="report-submit" />
				</form>


			</div>
		)
	}
}
