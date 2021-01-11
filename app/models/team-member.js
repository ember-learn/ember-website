import Model, { attr } from '@ember-data/model';

export default class TeamMemberModel extends Model {
  @attr('date') added;
  @attr('string') first;
  @attr('string') github;
  @attr('string') image;
  @attr('string') last;
  @attr('string') name;
  @attr teams;
  @attr('string') twitter;
}
