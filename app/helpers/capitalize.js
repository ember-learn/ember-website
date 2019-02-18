import { helper } from '@ember/component/helper';
import { capitalize as capitalizeUtil } from '@ember/string';

export function capitalize([name]/*, hash*/) {
  return capitalizeUtil(name);
}

export default helper(capitalize);
