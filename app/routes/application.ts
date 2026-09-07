import { isDevelopingApp, isTesting } from '@embroider/macros';
import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import GoogleAnalytics from 'ember-metrics/metrics-adapters/google-analytics';

type TrackData = {
  hostname: string;
  page: string | null;
  title: string;
};

export default class AplicationRoute extends Route {
  @service declare navbar: Services['navbar'];
  @service declare metrics: Services['metrics'];
  @service declare fastboot: Services['fastboot'];
  @service declare router: Services['router'];

  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);

    this.setupMetrics();

    this.router.on('routeDidChange', () => {
      // @ts-expect-error: Incorrect type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.navbar.closePopupMenu();

      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }

      this.trackPage();
    });
  }

  private setupMetrics(): void {
    // @ts-expect-error: Incorrect type
    if (this.fastboot.isFastBoot) {
      return;
    }

    if (isDevelopingApp()) {
      return;
    }

    this.metrics.appEnvironment = isTesting() ? 'test' : 'production';

    this.metrics.activateAdapters([
      {
        adapter: GoogleAnalytics,
        config: {
          id: 'UA-27675533-1',
          require: ['linkid'],
        },
        environments: ['production'],
        name: 'GoogleAnalytics',
      },
    ]);
  }

  private trackPage(): void {
    // @ts-expect-error: Incorrect type
    if (this.fastboot.isFastBoot) {
      return;
    }

    const trackData: TrackData = {
      hostname: 'www.emberjs.com',
      page: this.router.currentURL,
      title: this.router.currentRouteName ?? 'unknown',
    };

    this.metrics.trackPage(trackData);
  }
}
