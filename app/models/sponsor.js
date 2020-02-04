import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  content: DS.attr(),
  name: DS.attr(),
  end: DS.attr('date'),
  image: DS.attr(),
  start: DS.attr('date'),
  url: DS.attr(),

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
