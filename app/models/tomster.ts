import Model, { attr } from '@ember-data/model';

export default class TomsterModel extends Model {
  @attr('date') date;
  @attr('string') image;
  @attr tags;
  @attr('string') title;
  @attr('string') url;
}
