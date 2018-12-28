import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import groupBy from 'ember-group-by';

export default Controller.extend({
  lat: 20,
  lng: 0,
  zoom: 2,
  meetupsByArea: groupBy('model', 'area'),
  sortingKeys: Object.freeze(['items.length:desc']),
  sortedMeetupsByArea: sort('meetupsByArea', 'sortingKeys'),
});
