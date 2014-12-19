// For more information see: http://emberjs.com/guides/routing/
Codecove.CodeRoute = Ember.Route.extend({
	 model: function(params) {
        return this.store.find('code', params.code_id);
    },

    actions: {
    	update: function(code) {
    		code.save();
    	}
    }
});
