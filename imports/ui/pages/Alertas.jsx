import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Alertas extends TrackerReact(Component) {

	componentDidMount() {
		ReactDOM.render(<LogInButtonsDialog />, document.getElementById('login'));
	}

	componentWillUnmount() {

  }

	render() {
		return (
			<div>
				<h2>
					Alertas
				</h2>

				<div id="login" className="alt-accounts-log-in-buttons"></div>

			</div>
		)
	}
}
