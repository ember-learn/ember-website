import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class SponsorModel extends Model {
  declare [Type]: 'sponsor';

  @attr declare content: string;
  @attr('date') declare end: Date;
  @attr declare image: string;
  @attr declare name: string;
  @attr('date') declare start: Date;
  @attr declare url: string;
  @attr('number') declare order: number;

  get term(): string {
    const startYear = this.start.getFullYear();
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
