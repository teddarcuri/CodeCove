// For more information see: http://emberjs.com/guides/routing/

Codecove.CodesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('code');
    }
});
