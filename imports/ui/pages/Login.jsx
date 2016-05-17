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

	componentDidMount() {
		ReactDOM.render(<LogInButtonsDialog />, document.getElementById('login'));
	}

	render() {

		return (

				<div id="login" className="alt-accounts-log-in-buttons"></div>

		)
	}
}
