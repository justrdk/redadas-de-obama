import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from 'react-sidebar';
import SidebarContent from '../components/SidebarContent';

import MaterialTitlePanel from '../components/MaterialTitlePanel.jsx';


const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
	headerMenuLinkText: {
		textAlign: 'center',
		width: '100%',
		margin: '0px auto'
	},
  content: {
    padding: '16px',
  },
	fullWidth: {
		width: '100%'
	}
};

export default class Main extends Component {

	constructor(props) {
	    super(props);

	    // this.state = {
			//
	    // };
	}

	// getInitialState() {
  //   return {docked: false, open: false};
  // }

  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged.bind(this));
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged.bind(this));
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({docked: this.state.mql.matches});
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
		const sidebar = <SidebarContent />;

    const contentHeader = (
      <span style={styles.fullWidth}>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>
					 <i className="fa fa-bars"></i>
         </a>}
        <span style={styles.headerMenuLinkText}> Redadas de Obama</span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen.bind(this),
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
						{this.props.yield}

          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}
