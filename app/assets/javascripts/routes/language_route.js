// For more information see: http://emberjs.com/guides/routing/

Codecove.LanguageRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('language', params.language_id);
    }
});
