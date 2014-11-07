// For more information see: http://emberjs.com/guides/routing/

Codecove.CodeNewRoute = Ember.Route.extend({

	actions: {
		create: function(code) {
			code.save();
			this.transitionTo('collections');
		}
	}

});
