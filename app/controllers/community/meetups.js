import Controller from '@ember/controller';
import groupBy from 'ember-group-by';

export default Controller.extend({
  lat: 20,
  lng: 0,
  zoom: 2,
  meetupsByArea: groupBy('model', 'area')
});
