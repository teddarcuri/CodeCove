// For more information see: http://emberjs.com/guides/routing/
Codecove.CodesRoute = Ember.Route.extend({
    model: function() {
        this.store.find('code');

        // Only return code records that have been saved
        return this.store.filter('code', function(code) {
        	return !code.get('isNew');
        });
    }
});
