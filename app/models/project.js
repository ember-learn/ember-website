import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  name: attr('string'),
  baseFileName: attr('string'),
  filter: attr(),
  repo: attr('string'),
  initialVersion: attr('string'),
  lastRelease: attr('string'),
  futureVersion: attr('string'),
  finalVersion: attr('string'),
  channel: attr('string'),
  cycleEstimatedFinishDate: attr('date'),
  date: attr('date'),
  nextDate: attr('date'),
  changelogPath: attr('string'),
  debugFileName: attr('string'),
  ignoreFiles: attr(),
  content: attr('string'),

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
