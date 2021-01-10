import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  image: attr(),
  repository: attr('string'),
  demo: attr('string'),
  features: attr(),
  html: attr('string'),
});
