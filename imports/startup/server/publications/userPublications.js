Meteor.publish('userData', function () {
    if (this.userId) {
        return Meteor.users.find({ _id: this.userId }, {
            fields: {
                getsAlerts: 1
            }
        });
    } else {
        return this.ready();
    }

});
