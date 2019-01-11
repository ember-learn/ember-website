import { helper } from '@ember/component/helper';
import { htmlSafe as safe } from '@ember/template';

export function htmlSafe([input]/*, hash*/) {
  return safe(input);
}

export default helper(htmlSafe);
