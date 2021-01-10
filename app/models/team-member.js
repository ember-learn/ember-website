import Model, { attr } from '@ember-data/model';

export default Model.extend({
  added: attr('date'),
  first: attr('string'),
  github: attr('string'),
  image: attr('string'),
  last: attr('string'),
  name: attr('string'),
  teams: attr(),
  twitter: attr('string'),
});
