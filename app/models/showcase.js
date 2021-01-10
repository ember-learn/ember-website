import Model, { attr } from '@ember-data/model';

export default Model.extend({
  demo: attr('string'),
  features: attr(),
  html: attr('string'),
  image: attr(),
  name: attr('string'),
  repository: attr('string'),
});
