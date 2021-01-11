import Model, { attr } from '@ember-data/model';

export default class SponsorModel extends Model {
  @attr('string') content;
  @attr('date') end;
  @attr('string') image;
  @attr('string') name;
  @attr('date') start;
  @attr('string') url;

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
