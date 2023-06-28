import Model, { attr } from '@ember-data/model';

export default class SponsorModel extends Model {
  @attr content;
  @attr('date') end;
  @attr image;
  @attr name;
  @attr('date') start;
  @attr url;
  @attr('number') order;

  get term() {
    let startYear = this.start.getFullYear();
    let endYear;

    if (this.end) {
      endYear = this.end.getFullYear();
    }

    if (startYear === endYear) {
      return `${startYear}`;
    }

    if (!endYear) {
      endYear = 'present';
    }

    return `${startYear} - ${endYear}`;
  }
}
