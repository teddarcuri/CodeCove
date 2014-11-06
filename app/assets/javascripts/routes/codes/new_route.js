// For more information see: http://emberjs.com/guides/routing/

Codecove.CodesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('code');
	}
});
