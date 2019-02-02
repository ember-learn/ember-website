import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['filter'],
  filter: 'all',

  sorting: Object.freeze(['date:desc']),
  sortedModel: sort('filteredModel', 'sorting'),

  filteredModel: computed('filter', function() {
    if(this.filter === 'all') {
      return this.model;
    }

    return this.model.filter(tomster => tomster.tags.includes(this.filter));
  })
});
