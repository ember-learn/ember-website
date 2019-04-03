import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr(),
  baseFileName: DS.attr(),
  filter: DS.attr(),
  repo: DS.attr(),
  initialVersion: DS.attr(),
  lastRelease: DS.attr(),
  futureVersion: DS.attr(),
  finalVersion: DS.attr(),
  channel: DS.attr(),
  cycleEstimatedFinishDate: DS.attr('date'),
  date: DS.attr('date'),
  nextDate: DS.attr('date'),
  changelogPath: DS.attr(),
  debugFileName: DS.attr(),
  ignoreFiles:  DS.attr(),
  content: DS.attr(),

  isEmberBeta: computed('channel', 'name', function() {
    return this.get('channel') === 'beta' && this.get('name') === 'Ember';
  }),

  lastReleaseChangelogUrl: computed('channel', 'changelogPath', 'lastRelease', 'repo', function() {
    if(this.channel === 'canary' || !this.changelogPath) {
      return;
    }

    return `https://github.com/${this.repo}/blob/v${this.lastRelease}/${this.changelogPath}`
  })
});
