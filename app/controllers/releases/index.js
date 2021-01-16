import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  emberBetaProject: computed('model.@each.isEmberBeta', function () {
    return this.model.find((p) => p.isEmberBeta);
  }),
});
