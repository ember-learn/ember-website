import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  repository: DS.attr(),
  demo: DS.attr(),
  features: DS.attr(),
  html: DS.attr(),
});
