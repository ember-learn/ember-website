import Component from '@ember/component';
import { getOwner } from '@ember/application';

export default Component.extend({
  tagName: '',
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.config = config['survey'];
  },
});