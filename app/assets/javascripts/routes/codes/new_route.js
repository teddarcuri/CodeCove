// For more information see: http://emberjs.com/guides/routing/

Codecove.CodesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('code');
	},

	setupController: function(controller, model) {
		// Keeps default behavior, for some reason? IDK, MAN!
		this._super(controller, model);
		// Set the model to collect all collections
		controller.set('collections', this.store.find('collection'));
		controller.set('languages', this.store.find('language'));
	},

	// Save the Code
	actions: {
		create: function(code) {
			var route = this;
			code.save().then(function(){
				console.log("saved");
			});
		}
	}
});
