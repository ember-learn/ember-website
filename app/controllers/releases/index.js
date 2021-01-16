import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  emberBetaProject: computed('model.@each.{name,channel}', function () {
    return this.model.find((project) => {
      return project.name === 'Ember' && project.channel === 'beta';
    });
  }),
});
