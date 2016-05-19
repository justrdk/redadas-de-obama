import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


//const Raids = Meteor.subscribe('raids.public');

export default class Login extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {

	    };
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
