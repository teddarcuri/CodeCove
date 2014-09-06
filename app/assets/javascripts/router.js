// For more information see: http://emberjs.com/guides/routing/

Codecove.Router.map(function() {
  this.resource('collections');
  this.resource('collection', { path: 'collections/:collection_id'});
  this.resource('languages');
});
