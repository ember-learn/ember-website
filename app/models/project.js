import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr('string') baseFileName;
  @attr('string') changelogPath;
  @attr('string') channel;
  @attr('string') content;
  @attr('date') date;
  @attr('string') debugFileName;
  @attr filter;
  @attr ignoreFiles;
  @attr('string') lastRelease;
  @attr('string') name;
  @attr('string') repo;

  get lastReleaseChangelogUrl() {
    if (this.channel === 'canary' || !this.changelogPath) {
      return '';
    }

    return `https://github.com/${this.repo}/blob/v${this.lastRelease}/${this.changelogPath}`;
  }
}
