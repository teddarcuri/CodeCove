// for more details see: http://emberjs.com/guides/models/defining-models/

Codecove.Code = DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  description: DS.attr('string'),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string'),
  collections: DS.hasMany('collection', {async: true}),
  languages: DS.hasMany('language', {async: true})
});
