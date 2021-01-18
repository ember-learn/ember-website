import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class ReleasesReleaseRoute extends Route {
  model() {
    return hash({
      ember: this.store.find('project', 'ember/release'),
      emberData: this.store.find('project', 'emberData/release'),
    });
  }
}
