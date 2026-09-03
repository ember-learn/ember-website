import Model, { attr } from '@ember-data/model';

export default class ShowcaseModel extends Model {
  @attr('string') demo;
  @attr features;
  @attr('string') html;
  @attr image;
  @attr('string') name;
  @attr('string') repository;
}
