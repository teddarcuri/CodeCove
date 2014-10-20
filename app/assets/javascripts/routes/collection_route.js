// For more information see: http://emberjs.com/guides/routing/

Codecove.CollectionRoute = Ember.Route.extend({
    model: function(params){
        return collection.findBy('id', params.collection_id);
    }
});
