import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  sortingKey: Object.freeze(['id']),
  sortedModel: sort('model', 'sortingKey')
})
