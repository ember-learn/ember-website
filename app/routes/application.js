import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navbar: service(),
  metrics: service(),
  fastboot: service(),
  router: service(),

  init() {
    this._super(...arguments);

    this.router.on('routeDidChange', () => {
      this.navbar.closePopupMenu();
      this._trackPage();
    })
  },

  _trackPage() {
    if(this.fastboot.isFastBoot) {
      return;
    }

    const page = this.url;
    const title = this.getWithDefault('currentRouteName', 'unknown');

    // this is constant for this app and is only used to identify page views in the GA dashboard
    const hostname = 'www.emberjs.com';

    this.metrics.trackPage({ page, title, hostname });
  }
});
