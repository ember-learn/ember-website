import Model, { attr } from '@ember-data/model';

export default class MeetupModel extends Model {
  @attr('string') area;
  @attr('number') lat;
  @attr('number') lng;
  @attr('string') location;
  @attr organizers;
  @attr('string') url;
}
