import Component from '@glimmer/component';

export default class ReleaseTimelineComponent extends Component {
    get betaList() {
        let currentBeta = parseInt(this.args.project.lastRelease.match(/\d+$/)[0], 10);

        return new Array(currentBeta).fill(null).map((_, i) => i+1);
    }
}
