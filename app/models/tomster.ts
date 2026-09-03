import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class TomsterModel extends Model {
  declare [Type]: 'tomster';

  @attr('date') declare date: Date;
  @attr declare image: string;
  @attr declare tags: string[];
  @attr declare title: string;
  @attr declare url: string;
}
