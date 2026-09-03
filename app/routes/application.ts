import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';

export default class AplicationRoute extends Route {
  @service declare navbar: Services['navbar'];
  @service declare metrics: Services['metrics'];
  @service declare fastboot: Services['fastboot'];
  @service declare router: Services['router'];

  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);

    this.router.on('routeDidChange', () => {
      // @ts-expect-error: Incorrect type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.navbar.closePopupMenu();
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
      this._trackPage();
    });
  }

  _trackPage(): void {
    // @ts-expect-error: Incorrect type
    if (this.fastboot.isFastBoot) {
      return;
    }

    // @ts-expect-error: Incorrect type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const page = this.url;
    // @ts-expect-error: Incorrect type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const title = this.currentRouteName ?? 'unknown';

    // this is constant for this app and is only used to identify page views in the GA dashboard
    const hostname = 'www.emberjs.com';

    // @ts-expect-error: Incorrect type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    this.metrics.trackPage({ page, title, hostname });
  }
}
