import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend(AdapterFetch, {
  fastboot: service(),

  host: computed('fastboot.isFastBoot', function() {
    if (this.get('fastboot.isFastBoot')) {
      let protocol = this.get('fastboot.request.protocol');

      if(protocol === 'undefined:') {
        protocol = 'http:'
      }
      return `${protocol}//${this.get('fastboot.request.host')}`;
    } else {
      return window.location.origin;
    }
  }),

  urlForFindAll(modelName) {
    const path = this.pathForType(modelName);
    return `${this.host}/data/${path}/all.json`;
  },

  urlForFindRecord(id, modelName) {
    const path = this.pathForType(modelName);
    return `${this.host}/data/${path}/${id}.json`;
  }
});
