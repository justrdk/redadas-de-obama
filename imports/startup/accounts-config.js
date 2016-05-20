import { Accounts } from 'meteor/accounts-base';

if (Meteor.isServer ) {
	Accounts.onCreateUser(function(options, user) {
	    if (user.getsAlerts == undefined) user.getsAlerts = false;
	});

}

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
