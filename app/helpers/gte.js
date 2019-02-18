import { helper } from '@ember/component/helper';

 export function gte([base, comparison]) {
  return base >= comparison;
}

 export default helper(gte);
