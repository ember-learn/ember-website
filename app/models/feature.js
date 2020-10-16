import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr(),
  summary: attr(),
  status: attr(),
  statusText: attr(),
  availability: attr(),
  resources: attr(),
  champions: attr(),
  content: attr(),
});
