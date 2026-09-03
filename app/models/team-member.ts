import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class TeamMemberModel extends Model {
  declare [Type]: 'team-member';

  @attr('date') declare added: Date;
  @attr declare bluesky?: string;
  @attr declare first: string;
  @attr declare github?: string;
  @attr declare image: string;
  @attr declare last: string;
  @attr declare mastodon?: string;
  @attr declare name: string;
  @attr declare social?: string;
  @attr declare teams: string[];
  @attr declare twitter?: string;
}
