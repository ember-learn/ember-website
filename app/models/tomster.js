import Model, { attr } from '@ember-data/model';

export default Model.extend({
  date: attr('date'),
  image: attr('string'),
  tags: attr(),
  title: attr('string'),
  url: attr('string'),
});
