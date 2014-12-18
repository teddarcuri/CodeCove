var showdown = new Showdown.converter();

Ember.Handlebars.helper('markdown', function(input) {
  return new Handlebars.SafeString( showdown.makeHtml(input) );
});