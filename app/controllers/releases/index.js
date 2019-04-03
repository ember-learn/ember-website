import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  emberBetaProject: computed('model.@each.isEmberBeta', function() {
    return this.model.find(p => p.isEmberBeta);
  }),
  emberReleaseProject: computed('model.@each.{channel,name}', function() {
    return this.model.find((p) => {
      return p.get('channel') === 'release' && p.get('name') === 'Ember';
    });
  }),
  emberLTSProject: computed('model.@each.{channel,name}', function() {
    return this.model.find((p) => {
      return p.get('channel') === 'lts' && p.get('name') === 'Ember';
    });
  })
});
