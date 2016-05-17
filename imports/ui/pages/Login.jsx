import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

var authy = require('authy')('56uV5aueKoie9fQB1yEKVdL3FLORCSQo');


//const Raids = Meteor.subscribe('raids.public');

export default class Login extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {

	    };
	}

	handleLogin(e) {
		e.preventDefault();

		authy.register_user('ileana.m.salinas@gmail.com', '6024239066', function (err, res) {
    // res = {user: {id: 1337}} where 1337 = ID given to use, store this someplace
		if(err) {
			console.log('Error: ' + err);
		} else {
			console.log('No Error: ' + res);
		}
});

	}

	render() {

		return (
			<div>
				<form onSubmit={this.handleLogin}>
					<input type="text" placeholder="Area Code" name="areacode" className="areacode" />
					<input type="text" placeholder="Phone Number" name="phonenumber" className="phonenumber" />

					<input type="submit" className="report-submit" />
				</form>

				<br />



				<div id="login-message">

				</div>
			</div>
		)
	}
}
