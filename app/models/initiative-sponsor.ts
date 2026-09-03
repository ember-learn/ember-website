import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class InitiativeSponsorModel extends Model {
  declare [Type]: 'initiative-sponsor';

  @attr declare content: string;
  @attr declare image: string;
  @attr declare name: string;
  @attr declare url: string;
  @attr('number') declare tier: number;
  @attr('number') declare order: number;
}
