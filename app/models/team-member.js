import Model, { attr } from '@ember-data/model';

export default class TeamMemberModel extends Model {
  @attr('date') added;
  @attr bluesky;
  @attr first;
  @attr github;
  @attr image;
  @attr last;
  @attr mastodon;
  @attr name;
  @attr teams;
  @attr twitter;
}
