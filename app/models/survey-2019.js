import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  questionId: DS.attr(),
  content: DS.attr(),
  fragment: DS.attr(),
});
