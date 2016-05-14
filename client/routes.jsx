import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components

import Main from '../imports/ui/layouts/Main.jsx';

FlowRouter.route("/", {
  action() {
    mount(Main, {

    });
  }
});
