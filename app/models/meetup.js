import Model, { attr } from '@ember-data/model';

export default Model.extend({
  location: attr(),
  url: attr(),
  lat: attr(),
  lng: attr(),
  organizers: attr(),
  area: attr(),
});
