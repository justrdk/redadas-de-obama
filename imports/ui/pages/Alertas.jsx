import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import AlertOptions from '../components/AlertOptions.jsx';

export default class Alertas extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
				subscription: {

				}
	    };
	}

	componentDidMount() {
		//ReactDOM.render(<LogInButtonsDialog />, document.getElementById('login'));
	}

	componentWillUnmount() {

  }

	render() {
		return (
			<div>
				<h2>
					Alertas
				</h2>

				<AlertOptions />

			</div>
		)
	}
}
