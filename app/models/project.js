import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  baseFileName: attr('string'),
  changelogPath: attr('string'),
  channel: attr('string'),
  content: attr('string'),
  cycleEstimatedFinishDate: attr('date'),
  date: attr('date'),
  debugFileName: attr('string'),
  filter: attr(),
  finalVersion: attr('string'),
  futureVersion: attr('string'),
  ignoreFiles: attr(),
  initialVersion: attr('string'),
  lastRelease: attr('string'),
  name: attr('string'),
  nextDate: attr('date'),
  repo: attr('string'),

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
