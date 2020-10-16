import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr(),
  image: attr(),
  url: attr(),
  inactive: attr(),
  content: attr(),
  added: attr('date'),
  featured: attr(),
});
