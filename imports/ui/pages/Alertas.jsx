import React, { Component } from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AlertStatus from '../components/AlertStatus.jsx';

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
				getsAlerts: false,
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
		this.state.getsAlerts = !this.state.getsAlerts;
		//this.setState({getsAlerts: !this.state.getsAlerts});
		console.log(this.state.getsAlerts);
		Meteor.user().profile.getsAlerts = this.state.getsAlerts;
	}


	render() {

		let self = this;
		return (
			<div>
				<h2>
					Alertas
				</h2>

				{
					Meteor.user() ?
					<span>
					<AlertStatus getsAlerts={this.state.getsAlerts} />
					<Toggle
						label="Recibe alertas de redadas"
						labelPosition="right"
						style={styles.toggle}
						id="alert-status"
						defaultToggled={false}
						onToggle={this.handleAlertChange.bind(this)} />
					<br />
					<TextField hintText="Tu numero celular" id="cel-number" />
					<br />
					<RaisedButton type="submit" className="report-submit" label="Inscribir a Alertas" primary={true} style={styles.button} />
					</span>
					:
					<AccountsUIWrapper />
				}


			</div>
		)
	}
}
