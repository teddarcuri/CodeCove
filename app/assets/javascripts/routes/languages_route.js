// For more information see: http://emberjs.com/guides/routing/

Codecove.LanguagesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('language');
    }
});
