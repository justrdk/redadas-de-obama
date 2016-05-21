import React from 'react';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/accounts-base';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//import FlowRouter from 'meteor/kadira:flow-router';
import Main from '../../ui/layouts/Main.jsx';
// Import Pages
import Home from '../../ui/pages/Home.jsx';
import Alertas from '../../ui/pages/Alertas.jsx';
import Login from '../../ui/pages/Login.jsx';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

//const publicRoutes = FlowRouter.group( { name: 'public' } );

FlowRouter.route("/", {
		name: 'home',
    action() {
        mount(Main, {yield: <Home/>});
    }
});

FlowRouter.route("/alertas", {
		name: 'alertas',
		//triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        mount(Main, {yield: <Alertas/>});
    }
});

FlowRouter.route("/sign-in", {
		name: 'login',
    action() {
        mount(Main, {yield: <Login />});
    }
});

//Routes
//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
// AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('signUp');
// AccountsTemplates.configureRoute('verifyEmail');
