import React from 'react';
import {mount} from 'react-mounter';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//import FlowRouter from 'meteor/kadira:flow-router';

// Import Pages
import Home from '../../ui/pages/Home.jsx';
import Reporta from '../../ui/pages/Reporta.jsx';
import Alertas from '../../ui/pages/Alertas.jsx';
import Comparte from '../../ui/pages/Comparte.jsx';
import Privacidad from '../../ui/pages/Privacidad.jsx';
import Login from '../../ui/pages/Login.jsx';

import Main from '../../ui/layouts/Main.jsx';

const publicRoutes = FlowRouter.group( { name: 'public' } );

FlowRouter.route("/", {
		name: 'home',
    action() {
        mount(Main, {yield: <Home/>});
    }
});

FlowRouter.route("/reporta", {
    action() {
        mount(Main, {yield: <Reporta/>});
    }
});

FlowRouter.route("/alertas", {
		name: 'alertas',
		triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        mount(Main, {yield: <Alertas/>});
    }
});

FlowRouter.route("/comparte", {
    action() {
        mount(Main, {yield: <Comparte/>});
    }
});

FlowRouter.route("/privacidad", {
    action() {
        mount(Main, {yield: <Privacidad/>});
    }
});

FlowRouter.route("/sign-in", {
    action() {
        mount(Main, {yield: <Login />});
    }
});

//Routes
//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
