import Helper from '@ember/component/helper';
import { service } from '@ember/service';

export default class QP extends Helper {
  @service router;

  compute([qp]) {
    return this.router.currentRoute?.queryParams?.[qp];
  }
}
