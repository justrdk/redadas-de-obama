import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';


export default class AlertStatus extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
				getsAlerts: props.getsAlerts
			};
	}


	render() {
		console.log('Rendered AlertStatus: ' + this.state.AlertStatus);
		return (
				<div>
					<h4>
						{this.state.getsAlerts ?
							<p>Alerts On</p>
						:
							<p>Alerts Off</p>
						}
					</h4>

				</div>
		)
	}
}
