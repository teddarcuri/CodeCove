// for more details see: http://emberjs.com/guides/models/defining-models/

Codecove.Code = DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  description: DS.attr('string'),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string'),
  collection_ids: DS.hasMany('collection', {async: true}),
  language_ids: DS.hasMany('language', {async: true})
});
