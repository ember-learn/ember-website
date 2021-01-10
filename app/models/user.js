import Model, { attr } from '@ember-data/model';

export default Model.extend({
  added: attr('date'),
  content: attr('string'),
  featured: attr('boolean'),
  image: attr('string'),
  inactive: attr('boolean'),
  name: attr('string'),
  url: attr('string'),
});
