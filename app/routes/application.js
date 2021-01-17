import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AplicationRoute extends Route {
  @service navbar;
  @service metrics;
  @service fastboot;
  @service router;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      this.navbar.closePopupMenu();
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
      this._trackPage();
    });
  }

  _trackPage() {
    if (this.fastboot.isFastBoot) {
      return;
    }

    const page = this.url;
    const title = this.currentRouteName ?? 'unknown';

    // this is constant for this app and is only used to identify page views in the GA dashboard
    const hostname = 'www.emberjs.com';

    this.metrics.trackPage({ page, title, hostname });
  }
}
