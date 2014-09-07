// For more information see: http://emberjs.com/guides/routing/

Codecove.Router.map(function() {
  // Code
  this.resource('code');

  //Collections
  this.resource('collections');
  this.resource('collection', { path: '/collections/:collection_id'});

  //Languages
  this.resource('languages');
  this.resource('language', { path: '/languages/:language_id'});
});
