// For more information see: http://emberjs.com/guides/routing/

Codecove.CollectionsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('collection');
    }
});
