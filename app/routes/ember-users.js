import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmberUsersRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('user');
  }

  afterModel() {
    // ember-data runs flushAllPendingFetches using setTimeout, so outside of the Ember runloop.
    // Under prember this causes `Attempted to call store.adapterFor(), but the store instance has already been destroyed.`
    // So wait a bit
    return new Promise((resolve) => setTimeout(resolve, 10));
  }
}
