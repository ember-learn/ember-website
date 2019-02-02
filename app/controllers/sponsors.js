import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({

  sorting: Object.freeze(['end:desc', 'start:asc']),
  sortedModel: sort('model', 'sorting'),

  currentSponsors: computed('sortedModel.[]', function(){
    return this.sortedModel.filter(sponsor => !sponsor.end);
  }),

  pastSponsors: computed('sortedModel.[]', function() {
    return this.sortedModel.filter(sponsor => sponsor.end);
  })
});
