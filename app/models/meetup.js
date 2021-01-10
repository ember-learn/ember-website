import Model, { attr } from '@ember-data/model';

export default Model.extend({
  location: attr('string'),
  url: attr('string'),
  lat: attr('number'),
  lng: attr('number'),
  organizers: attr(),
  area: attr('string'),
});
