Codecove.CodesNewController = Ember.ObjectController.extend({
	// Okay, so I set this to null, because if it isn't here then the controller.set in my route won't work
	// Look into this
	// TODO: Maybe ask someone at Ember meetup if they have any idea what's going on here?
	collections: null
});