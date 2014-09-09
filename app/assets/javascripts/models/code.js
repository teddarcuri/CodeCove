// for more details see: http://emberjs.com/guides/models/defining-models/

Codecove.Code = DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  description: DS.attr('string')
});
