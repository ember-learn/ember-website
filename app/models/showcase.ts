import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class ShowcaseModel extends Model {
  declare [Type]: 'showcase';

  @attr declare demo: string;
  @attr declare features: string;
  @attr declare html: string;
  @attr declare image: {
    src: string;
  };
  @attr declare name: string;
  @attr declare repository: string;
}
