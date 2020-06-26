import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class BlackLivesMatterBannerComponent extends Component {
  @service router;

  get show() {
    return this.router.currentRouteName !== 'community.black-lives-matter';
  }
}
