import React, { Component } from 'react';

export default class SideBar extends Component {
	render() {
		return (
			<div>
				<aside className="side-nav">

					<header className="header">
						<div className="account-box">
							<div className="info status-online">
								<div data-status="online" className="thumb"><img src="http://placehold.it/40x40"/></div>
								<div className="data">
									<h4>celso.mireles</h4></div>
							</div>
							<nav className="options animated-hidden"></nav>
						</div>
					</header>

					<div className="rooms-list">
						<div className="wrapper">
							<h3 className="add-room active">CHANNELS <i className="fa fa-plus"></i></h3>
							<ul>
								<li className="link-room"><a className="open-room"><i className="fa fa-hashtag"></i><span className="name"> general</span><span className="opt"></span></a></li>
								<li className="link-room"><a><i className="fa fa-hashtag"></i><span className="name"> trainers</span><span className="opt"></span></a></li>
								<li className="link-room"><a><i className="fa fa-hashtag"></i><span className="name"> artists</span><span className="opt"></span></a></li>
								<li className="link-room"><a><i className="fa fa-hashtag"></i><span className="name"> arizona</span><span className="opt"></span></a></li>
							</ul>
						</div>
					</div>
					<footer className="footer"></footer>
				</aside>
			</div>
		)
	}
}
