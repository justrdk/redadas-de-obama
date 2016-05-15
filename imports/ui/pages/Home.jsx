import React, { Component } from 'react';
import {mount} from 'react-mounter';

export default class Home extends Component {
	render() {
		return (
			<div>

				
				<p>
					<img src="http://placehold.it/800x500?text=Map" className="img-responsive" />
				</p>
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
