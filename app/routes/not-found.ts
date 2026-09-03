import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';

export default class NotFoundRoute extends Route {
  @service declare fastboot: Services['fastboot'];

  beforeModel(): void {
    // @ts-expect-error: Incorrect type
    if (!this.fastboot.isFastBoot) {
      return;
    }

    // @ts-expect-error: Incorrect type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.fastboot.response.statusCode = 404;
  }
}
