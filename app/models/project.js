import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  name: attr(),
  baseFileName: attr(),
  filter: attr(),
  repo: attr(),
  initialVersion: attr(),
  lastRelease: attr(),
  futureVersion: attr(),
  finalVersion: attr(),
  channel: attr(),
  cycleEstimatedFinishDate: attr('date'),
  date: attr('date'),
  nextDate: attr('date'),
  changelogPath: attr(),
  debugFileName: attr(),
  ignoreFiles:  attr(),
  content: attr(),

  isEmberBeta: computed('channel', 'name', function() {
    return this.channel === 'beta' && this.name === 'Ember';
  }),

  lastReleaseChangelogUrl: computed('channel', 'changelogPath', 'lastRelease', 'repo', function() {
    if(this.channel === 'canary' || !this.changelogPath) {
      return;
    }

    return `https://github.com/${this.repo}/blob/v${this.lastRelease}/${this.changelogPath}`
  })
});
