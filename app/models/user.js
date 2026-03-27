import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('date') added;
  @attr content;
  @attr featured;
  @attr image;
  @attr inactive;
  @attr name;
  @attr url;
}
