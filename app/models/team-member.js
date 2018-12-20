import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  first: DS.attr(),
  last: DS.attr(),
  github: DS.attr(),
  twitter: DS.attr(),
  image: DS.attr(),
  teams: DS.attr(),
});
