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
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        } else {
            alert("Request failed.")
        }
    });



		console.log("Form submitted");
	}

	componentDidMount() {
		ReactDOM.render(<LogInButtons />, document.getElementById('login'));
	}


	render() {



		return (
			<div>
				<form onSubmit={this.insertRaid}>
					<input id="txtDescription" type="text" placeholder="Describe the raid" />
					<input id="txtAddress" type="text" placeholder="Zip Code" />

					<input type="submit" className="report-submit" />
				</form>

				<div id="login" className="alt-accounts-log-in-buttons"></div>
			</div>
		)
	}
}
