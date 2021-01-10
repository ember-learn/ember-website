import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  date: attr('date'),
  image: attr('string'),
  tags: attr(),
});
