import { helper } from '@ember/component/helper';
import { dasherize } from '@ember/string';

export function dasherizeString([string]) {
  return dasherize(string);
}

export default helper(dasherizeString);
