import Model, { attr } from '@ember-data/model';

export default class MeetupModel extends Model {
  @attr area;
  @attr lat;
  @attr lng;
  @attr location;
  @attr organizers;
  @attr url;
}
