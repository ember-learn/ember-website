import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  first: attr('string'),
  last: attr('string'),
  github: attr('string'),
  twitter: attr('string'),
  image: attr('string'),
  teams: attr(),
  added: attr('date'),
});
