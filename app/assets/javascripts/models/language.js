// for more details see: http://emberjs.com/guides/models/defining-models/

Codecove.Language = DS.Model.extend({
  name: DS.attr('string'),
  code_ids: DS.hasMany('code', {async: true})
});
