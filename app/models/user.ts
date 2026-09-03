import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('date') added;
  @attr('string') content;
  @attr('boolean') featured;
  @attr('string') image;
  @attr('boolean') inactive;
  @attr('string') name;
  @attr('string') url;
}
