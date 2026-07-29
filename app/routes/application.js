import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AplicationRoute extends Route {
  @service navbar;
  @service router;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      this.navbar.closePopupMenu();
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
    });
  }
}
