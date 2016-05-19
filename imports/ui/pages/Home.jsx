import React, { Component } from 'react';
import {mount} from 'react-mounter';
import RaidMap from '../components/RaidMap.jsx';
import ReportForm from '../components/ReportForm.jsx';


export default class Home extends Component {
	render() {
		return (
			<div>

				<RaidMap />
				<ReportForm />

				<p>
					<img src="http://placehold.it/800x900?text=Social+Media+Feed" className="img-responsive" />
				</p>
				<p>
					<img src="http://placehold.it/800x200?text=Counter" className="img-responsive" />
				</p>
			</div>
		)
	}
}
