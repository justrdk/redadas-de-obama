import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from 'react-sidebar';

import MaterialTitlePanel from '../components/MaterialTitlePanel.jsx';


const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

export default class Main extends Component {

	constructor(props) {
	    super(props);

	    this.state = {

	    };
	}

	getInitialState() {
    return {sidebarOpen: false, sidebarDocked: false};
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged.bind(this));
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged.bind(this));
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
		var sidebarContent = <b>Sidebar content</b>;

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  }
}
