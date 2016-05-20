import React, { Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MaterialTitlePanel from './MaterialTitlePanel';
import { Meteor } from 'meteor/meteor';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
	sidebarLinkLoggedOut: {
    display: 'block',
    padding: '16px 0px',
    color: '#c8c8c8',
    textDecoration: 'none',
  },
	sidebarLinkLoggedIn: {
		display: 'block',
    padding: '16px 0px',
    color: '#806565',
    textDecoration: 'none',
		fontWeight: '800'
	},
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

export default class SidebarContent extends TrackerReact(Component) {
	constructor(props) {
		super(props);

		this.state = {};
	}

	callLogout(e) {
		e.preventDefault();
		Meteor.logout();
	}

	render() {
		return (
	    <MaterialTitlePanel title="Menu" style={styles.sidebar}>
	      <div style={styles.content}>
	        <a href="/" style={styles.sidebarLink}>Inicio</a>
	        <a href="/alertas" style={styles.sidebarLink}>Alertas</a>


					<div style={styles.divider} />
					<a id="logout" href="" style={Meteor.user() ? styles.sidebarLinkLoggedIn : styles.sidebarLinkLoggedOut} onClick={this.callLogout}>Salir</a>
	      </div>
	    </MaterialTitlePanel>
	  );
	}
}
