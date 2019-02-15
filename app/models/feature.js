import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  summary: DS.attr(),
  status: DS.attr(),
  statusText: DS.attr(),
  availability: DS.attr(),
  resources: DS.attr(),
  champions: DS.attr(),
  content: DS.attr(),
});
