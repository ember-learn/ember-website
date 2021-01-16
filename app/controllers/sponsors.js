import Controller from '@ember/controller';
/* eslint-disable-next-line ember/no-computed-properties-in-native-classes */
import { sort } from '@ember/object/computed';

export default class SponsorsController extends Controller {
  sorting = ['end:desc', 'start:asc'];

  @sort('model', 'sorting') sortedModel;

  get currentSponsors() {
    return this.sortedModel.filter((sponsor) => !sponsor.end);
  }

  get pastSponsors() {
    return this.sortedModel.filter((sponsor) => sponsor.end);
  }
}
