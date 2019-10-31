import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  fastboot: service(),

  sortingKey: Object.freeze(['featured:desc', 'added']),
  sortedModel: sort('model', 'sortingKey')
});
