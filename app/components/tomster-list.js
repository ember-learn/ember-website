import Component from '@ember/component';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  sorting: Object.freeze(['date:desc']),
  sortedModel: sort('filteredModel', 'sorting'),

  filteredModel: computed('filter', 'tomsters', function () {
    const tomsters = this.tomsters ?? [];

    if (this.filter === 'all') {
      return tomsters;
    }

    return tomsters.filter((tomster) => tomster.tags.includes(this.filter));
  }),

  displayClass: computed('display', function () {
    return this.display === 'small'
      ? 'sm:grid-2 lg:grid-3'
      : 'sm:grid-1 lg:grid-2';
  }),
});
