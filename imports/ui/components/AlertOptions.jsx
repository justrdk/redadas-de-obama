import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';

export default class AlertOptions extends TrackerReact(Component) {

	render() {
		return (
			<div>
				Toggle
			</div>
		)
	}
}
