import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import Project from '../../lib/project';

export default Route.extend({
  model() {
    return hash({
      release: Project.findOne('release', 'Ember'),
      beta: Project.findOne('beta', 'Ember'),
      canary: Project.findOne('canary', 'Ember'),
      lts: Project.findOne('lts', 'Ember')
    });
  }
});
