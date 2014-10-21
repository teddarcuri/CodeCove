// for more details see: http://emberjs.com/guides/models/defining-models/

Codecove.Collection = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  codes: DS.hasMany('code')
});
