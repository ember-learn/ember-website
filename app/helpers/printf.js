import { helper } from '@ember/component/helper';

export function printf([template, value] /*, hash*/) {
  return template.replace(/%s/g, value);
}

export default helper(printf);
