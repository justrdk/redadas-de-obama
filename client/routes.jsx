import React from 'react';
import {mount} from 'react-mounter';
//import Authy from 'authy';
// Import Pages
import Home from '../imports/ui/pages/Home.jsx';
import Reporta from '../imports/ui/pages/Reporta.jsx';
import Alertas from '../imports/ui/pages/Alertas.jsx';
import Comparte from '../imports/ui/pages/Comparte.jsx';
import Privacidad from '../imports/ui/pages/Privacidad.jsx';
import Login from '../imports/ui/pages/Login.jsx';

import Main from '../imports/ui/layouts/Main.jsx';

FlowRouter.route("/", {
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
    action() {
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

FlowRouter.route("/login", {
    action() {
        mount(Main, {yield: <Login />});
    }
});
