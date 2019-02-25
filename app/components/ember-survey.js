import Component from '@ember/component';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  router: service(),
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.config = config['survey'];
  },
});