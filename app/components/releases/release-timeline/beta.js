import Component from '@glimmer/component';

export default class ReleasesReleaseTimelineBetaComponent extends Component {
  get lastBetaReleaseVersion() {
    /*
      We assume that `lastRelease` is a string of the form,
      `3.25.0-beta.1`, for example.
    */
    const lastRelease = this.args.emberBetaProject?.lastRelease;

    if (!lastRelease) {
      return undefined;
    }

    const [, version] = lastRelease.split('beta.');

    return parseInt(version, 10);
  }

  get isReleased() {
    return this.args.version <= this.lastBetaReleaseVersion;
  }

  get isCurrentBeta() {
    return this.args.version === this.lastBetaReleaseVersion;
  }

  get isNextBeta() {
    return this.args.version === this.lastBetaReleaseVersion + 1;
  }
}
