import Model, { attr } from '@ember-data/model';

export default class TomsterModel extends Model {
  @attr('date') date;
  @attr image;
  @attr tags;
  @attr title;
  @attr url;
}
