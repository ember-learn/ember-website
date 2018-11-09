import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  url: DS.attr(),
  inactive: DS.attr(),
  content: DS.attr(),
});
