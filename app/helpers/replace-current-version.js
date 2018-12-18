import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function replaceCurrentVersion([input]/*, hash*/) {
  return htmlSafe(input.replace("_CURRENT_VERSION_", "3.6"));
}

export default helper(replaceCurrentVersion);
