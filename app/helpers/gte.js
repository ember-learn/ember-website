import { helper } from '@ember/component/helper';

export function gte([base, comparison]/*, hash*/) {
  return base >= comparison;
}

export default helper(gte);
