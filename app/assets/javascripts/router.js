// For more information see: http://emberjs.com/guides/routing/

Codecove.Router.map(function() {

  // Root
  // Code
  this.resource('codes', {path: '/'}, function() {
    this.resource('code', {path: ':code_id'});
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

  // About
  this.resource('about');
});
