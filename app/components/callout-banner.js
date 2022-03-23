import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BannerCalloutsComponent extends Component {
  @tracked isShown = true;

  @action dismiss() {
    this.isShown = false;
  }
}
