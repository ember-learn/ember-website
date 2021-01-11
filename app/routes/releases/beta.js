import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      ember: this.store.find('project', 'ember/beta'),
      emberData: this.store.find('project', 'emberData/beta'),
    });
  },
});
