import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      ember: this.store.find('project', 'ember/release'),
      emberData: this.store.find('project', 'emberData/release')
    });
  }
});
