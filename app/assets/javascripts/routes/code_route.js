// For more information see: http://emberjs.com/guides/routing/
Codecove.CodeRoute = Ember.Route.extend({
	 model: function(params) {
        return this.store.find('code', params.code_id);
    },

    actions: {
    	update: function(code) {

            var alertBox = $("#alert-box");

            // Update the code
    	     code.save();

            // Turn off editing mode
    	     this.controller.set('isEditing', false);

            // Show the alert box
            alertBox.html("Successfully Updated " + code._data.name);
            alertBox.addClass("notification").addClass("is-visible");

            // Hide the alert box
            setTimeout(function () {
                alertBox.removeClass("is-visible");
            }, 6000);

    	},

    	delete : function(code) {
    		var route = this;
              var alertBox = $("#alert-box");

    		confirm('Are you sure you want to delete "' + code._data.name + '" ?');
    		code.destroyRecord().then( function() {
    			route.transitionTo("codes");

                    // Show the alert box
                    alertBox.html("Succesfully Deleted " + code._data.name);
                    alertBox.addClass("alert").addClass("is-visible");

                    // Hide the alert box
                    setTimeout(function () {
                        alertBox.removeClass("is-visible");
                    }, 6000);
    		});
    	}
    }
});
