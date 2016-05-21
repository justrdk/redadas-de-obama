import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function (options, user) {
	user.getsAlerts = false;
	return user;
});