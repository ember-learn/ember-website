import { helper } from '@ember/component/helper';
import { dasherize as dasherizeString } from '@ember/string';

export default helper(function dasherize(positional /*, named*/) {
  return dasherizeString(positional[0]);
});
