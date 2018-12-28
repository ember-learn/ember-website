import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  url: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  organizers: DS.attr(),
  area: DS.attr(),
});
