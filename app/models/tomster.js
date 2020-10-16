import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr(),
  url: attr(),
  date: attr('date'),
  image: attr(),
  tags: attr(),
});
