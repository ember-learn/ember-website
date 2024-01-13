import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReleasesBetaRoute extends Route {
  @service store;

  model() {
    return hash({
      ember: this.store.find('project', 'ember/beta'),
      emberData: this.store.find('project', 'emberData/beta'),
    });
  }

  afterModel() {
    // ember-data runs flushAllPendingFetches using setTimeout, so outside of the Ember runloop.
    // Under prember this causes `Attempted to call store.adapterFor(), but the store instance has already been destroyed.`
    // So wait a bit
    return new Promise((resolve) => setTimeout(resolve, 10));
  }
}
