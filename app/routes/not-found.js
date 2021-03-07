import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotFoundRoute extends Route {
  @service fastboot;

  beforeModel() {
    if (!this.fastboot.isFastBoot) {
      return;
    }

    this.fastboot.response.statusCode = 404;
  }
}
