import Model, { attr } from '@ember-data/model';

export default class ShowcaseModel extends Model {
  @attr demo;
  @attr features;
  @attr html;
  @attr image;
  @attr name;
  @attr repository;
}
