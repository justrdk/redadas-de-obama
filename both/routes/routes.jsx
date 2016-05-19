import React from 'react';
import {mount} from 'react-mounter';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//import Authy from 'authy';
// Import Pages
import Home from '../../imports/ui/pages/Home.jsx';
import Reporta from '../../imports/ui/pages/Reporta.jsx';
import Alertas from '../../imports/ui/pages/Alertas.jsx';
import Comparte from '../../imports/ui/pages/Comparte.jsx';
import Privacidad from '../../imports/ui/pages/Privacidad.jsx';
import Login from '../../imports/ui/pages/Login.jsx';

import Main from '../../imports/ui/layouts/Main.jsx';

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
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
