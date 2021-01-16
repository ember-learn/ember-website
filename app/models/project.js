import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr('string') baseFileName;
  @attr('string') changelogPath;
  @attr('string') channel;
  @attr('string') content;
  @attr('date') cycleEstimatedFinishDate;
  @attr('date') date;
  @attr('string') debugFileName;
  @attr filter;
  @attr('string') finalVersion;
  @attr('string') futureVersion;
  @attr ignoreFiles;
  @attr('string') initialVersion;
  @attr('string') lastRelease;
  @attr('string') name;
  @attr('date') nextDate;
  @attr('string') repo;

  get lastReleaseChangelogUrl() {
    if (this.channel === 'canary' || !this.changelogPath) {
      return '';
    }

    return `https://github.com/${this.repo}/blob/v${this.lastRelease}/${this.changelogPath}`;
  }
}
