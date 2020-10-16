import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr(),
  image: attr(),
  repository: attr(),
  demo: attr(),
  features: attr(),
  html: attr(),
});
