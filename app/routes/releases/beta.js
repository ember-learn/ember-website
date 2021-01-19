import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class ReleasesBetaRoute extends Route {
  model() {
    return hash({
      ember: this.store.find('project', 'ember/beta'),
      emberData: this.store.find('project', 'emberData/beta'),
    });
  }
}
