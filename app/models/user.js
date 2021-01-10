import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  image: attr('string'),
  url: attr('string'),
  inactive: attr('boolean'),
  content: attr('string'),
  added: attr('date'),
  featured: attr('boolean'),
});
