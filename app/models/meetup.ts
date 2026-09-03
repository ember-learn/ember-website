import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class MeetupModel extends Model {
  declare [Type]: 'meetup';

  @attr declare area: string;
  @attr('number') declare lat: number;
  @attr('number') declare lng: number;
  @attr declare location: string;
  @attr declare organizers: unknown[];
  @attr declare url: string;
}
