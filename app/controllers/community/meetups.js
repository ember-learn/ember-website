import Controller from '@ember/controller';
import groupBy from 'ember-group-by';

export default Controller.extend({
  meetupsByArea: groupBy('model', 'area')
});
