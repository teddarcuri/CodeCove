// For more information see: http://emberjs.com/guides/routing/

Codecove.CodesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('code');
	},

	setupController: function(controller, model) {
		// Keeps default behavior, for some reason? IDK, MAN!
		this._super(controller, model);
		controller.set('model', model);
		// Set the model to collect all collections
		controller.set('collections', this.store.find('collection'));
		controller.set('languages', this.store.find('language'));
	},

	// Save the Code
	actions: {
		create: function(code) {
			var route = this;
			code.save().then(function(){
				console.log(code);
				route.transitionTo("code", code.id);

				var alertBox = $("#alert-box");

			  // Show the alert box
            alertBox.html("Successfully Created " + code._data.name);
            alertBox.addClass("notification").addClass("is-visible");

            // Hide the alert box
            setTimeout(function () {
                alertBox.removeClass("is-visible");
            }, 6000);


			});
		}
	}
});
