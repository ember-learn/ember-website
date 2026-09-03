import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class UserModel extends Model {
  declare [Type]: 'user';

  @attr('date') declare added: Date;
  @attr declare content: string;
  @attr('boolean') declare featured: boolean;
  @attr declare image: string;
  @attr('boolean') declare inactive: boolean;
  @attr declare name: string;
  @attr declare url: string;
}
