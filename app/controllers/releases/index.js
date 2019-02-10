import { computed } from '@ember/object';
import Controller from '@ember/controller';
import ProjectsMixin from '../../mixins/projects';

export default Controller.extend(ProjectsMixin, {
  isIndexController: true,
  channel: 'beta',
  channelDescription: 'Releases are production-ready versions of Ember and Ember Data that have been through a six-week beta cycle.',

  latestVersionOfDocs: computed('model.release.lastRelease', function() {
    let release = this.get('model.release.lastRelease');
    let [major, minor] = release.split('.');

    return `${major}.${minor}.0`;
  }),

  emberBetaProject: computed('projects.@each.isEmberBeta', function() {
    return this.projects.find(p => p.isEmberBeta);
  })
});
