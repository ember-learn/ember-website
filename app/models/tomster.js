import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  url: DS.attr(),
  date: DS.attr('date'),
  image: DS.attr(),
  tags: DS.attr(),
});
