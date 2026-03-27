import Model, { attr } from '@ember-data/model';

export default class SponsorModel extends Model {
  @attr content;
  @attr image;
  @attr name;
  @attr url;
  @attr tier;
  @attr order;
}
