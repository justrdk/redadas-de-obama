import React, { Component } from 'react';
import {mount} from 'react-mounter';

export default class Home extends Component {
	render() {
		return (
			<div>
				<p>
					This example will automatically dock the sidebar if the page
					width is above 800px.
				</p>
				<p>
					This functionality should live in the component that renders the sidebar.
					This way you're able to modify the sidebar and main content based on the
					responsiveness data.
				</p>
			</div>
		)
	}
}
