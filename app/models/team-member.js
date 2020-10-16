import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr(),
  first: attr(),
  last: attr(),
  github: attr(),
  twitter: attr(),
  image: attr(),
  teams: attr(),
  added: attr('date'),
});
