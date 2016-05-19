import React, { Component } from 'react';
import {mount} from 'react-mounter';
import RaidMap from '../components/RaidMap.jsx';
import ReportForm from '../components/ReportForm.jsx';


export default class Home extends React.Component {
	render() {
		return (
			<div>
			
				<RaidMap />
				<ReportForm />


			</div>
		)
	}
}
