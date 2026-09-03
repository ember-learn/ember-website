import Helper from '@ember/component/helper';
import { type Registry as Services, service } from '@ember/service';

interface QpSignature {
  Args: {
    Named: {};
    Positional: [key: string];
  };
  Return: string | undefined;
}

export default class QpHelper extends Helper<QpSignature> {
  @service declare router: Services['router'];

  compute([key]: QpSignature['Args']['Positional']): QpSignature['Return'] {
    const queryParams = this.router.currentRoute?.queryParams as
      Record<string, string> | undefined;

    return queryParams?.[key];
  }
}
