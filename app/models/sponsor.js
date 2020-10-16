import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  content: attr(),
  name: attr(),
  end: attr('date'),
  image: attr(),
  start: attr('date'),
  url: attr(),

  term: computed('start', 'end', function() {
    let startYear = this.start.getFullYear();
    let endYear;

    if(this.end) {
      endYear = this.end.getFullYear();
    }

    if(startYear === endYear) {
      return startYear;
    }

    if(!endYear) {
      endYear = 'present';
    }

    return `${startYear} - ${endYear}`;
  })
});
