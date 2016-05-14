import React, { Component } from 'react';
import Snap from 'snapjs';
import ReactDOM from 'react-dom';

import SideBar from '../components/SideBar.jsx';
import Tooltip from '../components/Tooltip.jsx';
import Spotlight from '../components/Spotlight.jsx';
import UserCardPopover from '../components/UserCardPopover.jsx';
import FlexTabBar from '../components/FlexTabBar.jsx';
import ConnectionStatus from '../components/ConnectionStatus.jsx';

var snapper = new Snap({
	element: ReactDOM.findDOMNode(document.getElementById('content')),
	addBodyClasses: true,
	touchToDrag: false
});

export default class Main extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      sideToggle: true,
	    };
	}

	toggleSideNav(e){
		e.preventDefault();
		
		if( snapper.state().state=="left" ){
        snapper.close();
    } else {
        snapper.open('left');
    }

	}

  render() {
    return (
			<div>
				<div className="snap-drawers">
					<div className="snap-drawer snap-drawer-left">
						Left Drawer
					</div>
				</div>


				<div id="content" className="snap-content">
					<div id="toolbar">
                <a href="#" id="open-left" onClick={this.toggleSideNav.bind(this)}>Nav</a>
                <h1>Default</h1>
          </div>

					<div className="page-content">Content</div>
					<div id="bottom-bar">Page Footer</div>
				</div>
			</div>
    );
  }
}
