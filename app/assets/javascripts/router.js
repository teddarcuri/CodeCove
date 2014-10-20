// For more information see: http://emberjs.com/guides/routing/

Codecove.Router.map(function() {
  // Code
  this.resource('codes', function() {
    this.resource('code', {path: '/codes/:code_id'});
    this.route('new');
  });

  //Collections
  this.resource('collections', function(){
        this.resource('collection', { path: ':collection_id'});
  });

  //Languages
  this.resource('languages', function(){
      this.resource('language', { path: ':language_id'});
  });
});
