import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
	button: {
		margin: 12
	}
};

export default class Alertas extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {
				alertStatus: false,
				subscription: {

				}
	    };
	}

	componentDidMount() {
		//ReactDOM.render(<LogInButtonsDialog />, document.getElementById('login'));
	}

	componentWillUnmount() {

  }

	handleAlertChange() {

		console.log('toggled');
	}

	render() {
		return (
			<div>
				<h2>
					Alertas
				</h2>

				<Toggle
					label="Recibe alertas de redadas"
					labelPosition="right"
					style={styles.toggle}
					id="alert-status"
					defaultToggled={false}
					onToggle={this.handleAlertChange} />
				<br />
				<TextField hintText="Tu numero celular" id="cel-number" />
				<br />
				<RaisedButton type="submit" className="report-submit" label="Inscribir a Alertas" primary={true} style={styles.button} />

			</div>
		)
	}
}
