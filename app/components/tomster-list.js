import Component from '@ember/component';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  sorting: Object.freeze(['date:desc']),
  sortedModel: sort('filteredModel', 'sorting'),

  filteredModel: computed('filter', 'tomsters', function() {
    if(this.filter === 'all') {
      return this.tomsters;
    }

    return this.tomsters.filter(tomster => tomster.tags.includes(this.filter));
  })
});
