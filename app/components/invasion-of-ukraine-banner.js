import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class InvasionOfUkraineBannerComponent extends Component {
  @service router;

  get show() {
    return this.router.currentRouteName !== 'community.invasion-of-ukraine';
  }
}
