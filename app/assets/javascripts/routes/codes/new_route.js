// For more information see: http://emberjs.com/guides/routing/

Codecove.CodesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('code');
	},

	// Save the Code
	actions: {
		create: function(code) {

			var route = this;

			code.save().then(function() {
				route.transitionTo('codes/new');
			});
		}
	}
});
