import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  currentBetaNumber: computed('project.lastRelease', function() {
    let versionParts = this.project.lastRelease.split('.');
    return parseInt(versionParts[versionParts.length - 1], 10);
  }),

  isCurrentBeta: computed('version', 'currentBetaNumber', function() {
      return this.version === this.currentBetaNumber;
  }),

  isNextBeta: computed('version', 'currentBetaNumber', function() {
      return this.version === (this.currentBetaNumber + 1);
  }),

  isCompleted: computed('version', 'currentBetaNumber', function() {
    return this.version <= this.currentBetaNumber
  }),
});
