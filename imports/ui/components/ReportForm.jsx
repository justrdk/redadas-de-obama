import React, { Component } from 'react';
import {mount} from 'react-mounter';

import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ReportForm extends TrackerReact(Component) {

	constructor(props) {
	    super(props);

	    this.state = {

	    };
	}

	raids() {
		return Raids.find().fetch();
	}

	insertRaid(e) {
		e.preventDefault();



		console.log("Form submitted");
	}

	componentDidMount() {
		ReactDOM.render(<LogInButtons />, document.getElementById('login'));
	}


	render() {



		return (
			<div>
				<form onSubmit={this.insertRaid}>
					<input type="text" placeholder="Describe the raid" />
					<input type="text" placeholder="Zip Code" />

					<input type="submit" className="report-submit" />
				</form>

				<div id="login" className="alt-accounts-log-in-buttons"></div>
			</div>
		)
	}
}
