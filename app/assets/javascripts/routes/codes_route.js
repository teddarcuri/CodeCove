// For more information see: http://emberjs.com/guides/routing/
Codecove.CodesRoute = Ember.Route.extend({
    model: function() {
        this.store.find('code');

        return this.store.filter('code', function(code) {
        	return !code.get('isNew');
        });
    }
});
