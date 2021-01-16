import Controller from '@ember/controller';
/* eslint-disable-next-line ember/no-computed-properties-in-native-classes */
import { sort } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class EmberUsersController extends Controller {
  @service fastboot;

  @sort('model', 'sortingKey') sortedModel;

  sortingKey = ['featured:desc', 'added'];
}
