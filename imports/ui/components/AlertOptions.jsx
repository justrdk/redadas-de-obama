import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Toggle from 'react-toggle';



export default class AlertOptions extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
				alertStatus: false
	    };
	}

	handleAlertChange() {
		this.state.alertStatus = !this.state.alertStatus;
		console.log(this.state.alertStatus);
	}

	render() {
		return (
			<div>
				<label htmlFor="cheese-status">Recibir Alertas</label>

				<Toggle
				  id="alert-status"
				  defaultChecked={this.state.alertStatus}
				  onChange={this.handleAlertChange} />

			</div>
		)
	}
}
