import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import AlertOptions from '../components/AlertOptions.jsx';

export default class Alertas extends TrackerReact(Component) {

	componentDidMount() {
		ReactDOM.render(<LogInButtonsDialog />, document.getElementById('login'));
	}

	componentWillUnmount() {

  }

	isUser() {
		if ( Meteor.user() ) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		return (
			<div>
				<h2>
					Alertas
				</h2>

				<div id="login" className="alt-accounts-log-in-buttons"></div>

				{this.isUser() && <AlertOptions />}

			</div>
		)
	}
}
