import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class QP extends Helper {
  @service router;

  compute([qp]) {
    return this.router.currentRoute?.queryParams?.[qp];
  }
}
