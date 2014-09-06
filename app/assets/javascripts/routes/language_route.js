// For more information see: http://emberjs.com/guides/routing/

Codecove.LanguageRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('language', params.language_id);
    }
});
