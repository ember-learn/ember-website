import Model, { attr } from '@ember-data/model';

export default Model.extend({
  area: attr('string'),
  lat: attr('number'),
  lng: attr('number'),
  location: attr('string'),
  organizers: attr(),
  url: attr('string'),
});
