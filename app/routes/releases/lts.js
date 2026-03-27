import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReleasesLtsRoute extends Route {
  @service store;

  model() {
    return hash({
      ember: this.store.findRecord('project', 'ember/lts'),
      emberData: this.store.findRecord('project', 'emberData/lts'),
    });
  }
}
