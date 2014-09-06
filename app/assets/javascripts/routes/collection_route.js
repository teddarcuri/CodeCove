// For more information see: http://emberjs.com/guides/routing/

Codecove.CollectionRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('collection', params.collection_id);
    }
});
