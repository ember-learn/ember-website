import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  showBanner: computed('router.currentRouteName', function() {
    if (this.router.currentRouteName == 'index') {
      return true;
    }
  }),
});
