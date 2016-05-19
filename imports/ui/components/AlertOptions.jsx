import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
};


export default class AlertOptions extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
				alertStatus: false
	    };
	}

	handleAlertChange() {

		console.log('toggled');
	}

	render() {
		return (
			<div>

				<Toggle
					label="Recibe alertas de redadas"
					labelPosition="right"
					style={styles.toggle}
				  id="alert-status"
				  defaultToggled={false}
				  onToggle={this.handleAlertChange} />

				<TextField hintText="Tu numero celular" id="cel-number" />


			</div>
		)
	}
}
